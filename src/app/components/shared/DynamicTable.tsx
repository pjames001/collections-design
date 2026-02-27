import { ClipboardList, Download, Mail } from 'lucide-react';
import React, { useState, useMemo, Fragment } from 'react';

// ─── Types ────────────────────────────────────────────────────────────────────

export type ColumnDef<T = Record<string, unknown>> = {
  key: string;
  title: string;
  align?: 'left' | 'center' | 'right';
  render?: (value: unknown, row: T, theme: string) => React.ReactNode;
};

export type ExpandedFieldDef<T = Record<string, unknown>> = {
  key: string;
  label: string;
  color?: string;
  separator?: boolean;
  render?: (value: unknown, row: T, theme: string) => React.ReactNode;
};

interface DynamicTableProps<T extends Record<string, unknown>> {
  theme: string;
  data: T[];
  columns: ColumnDef<T>[];
  rowKey?: keyof T;
  title?: string;
  subtitle?: string;
  icon?: React.ReactNode;
  expandedFields?: ExpandedFieldDef<T>[];
  onExport?: () => void;
  onEmailResults?: () => void;
  onBulkAction?: (selected: T[]) => void;
  bulkActionLabel?: string;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function getNestedValue(obj: Record<string, unknown>, key: string): unknown {
  return key.split('.').reduce<unknown>((acc, k) => {
    if (acc && typeof acc === 'object') return (acc as Record<string, unknown>)[k];
    return undefined;
  }, obj);
}

function renderCell(value: unknown): React.ReactNode {
  if (value === null || value === undefined) return <span className="text-slate-500">—</span>;
  if (typeof value === 'boolean') return (
    <span className={`inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-tighter ${value ? 'text-green-400' : 'text-red-400'}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${value ? 'bg-green-400' : 'bg-red-400'}`} />
      {value ? 'Yes' : 'No'}
    </span>
  );
  if (typeof value === 'object') return (
    <code className="text-[11px] bg-slate-800/80 text-green-400 px-1.5 py-0.5 rounded font-mono">
      {JSON.stringify(value)}
    </code>
  );
  return String(value);
}

// ─── Component ────────────────────────────────────────────────────────────────

function DynamicTable<T extends Record<string, unknown>>({
  theme,
  data,
  columns,
  rowKey = 'id' as keyof T,
  title = 'Filter Results',
  subtitle,
  icon,
  expandedFields,
  onExport,
  onEmailResults,
  onBulkAction,
  bulkActionLabel = 'Apply Bulk Actions',
}: DynamicTableProps<T>) {

  const [selectedIds, setSelectedIds] = useState(new Set<unknown>());
  const [expandedRow, setExpandedRow] = useState<unknown>(null);

  const isExpandable = Array.isArray(expandedFields) && expandedFields.length > 0;
  const getRowId = (row: T) => row[rowKey];

  const toggleSelectAll = () => {
    if (selectedIds.size === data.length) {
      setSelectedIds(new Set());
    } else {
      setSelectedIds(new Set(data.map(getRowId)));
    }
  };

  const toggleRow = (id: unknown) => {
    const next = new Set(selectedIds);
    next.has(id) ? next.delete(id) : next.add(id);
    setSelectedIds(next);
  };

  const toggleExpand = (id: unknown) => {
    if (!isExpandable) return;
    setExpandedRow((prev) => (prev === id ? null : id));
  };

  const selectedRows = useMemo(
    () => data.filter((row) => selectedIds.has(getRowId(row))),
    [selectedIds, data]
  );

  const isDark = theme === 'dark';

  return (
    <div className={`rounded-[35px] border overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-500 ${
      isDark ? 'bg-slate-900/40 border-white/5' : 'bg-transparent border-slate-300 shadow-lg shadow-slate-800/40'
    }`}>

      {/* Header */}
      <div className={`px-10 py-6 border-b ${isDark ? 'border-white/5 bg-slate-800/50' : 'border-slate-200 bg-sky-50/50'}`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-green-500/10 rounded-xl">
              {icon}
            </div>
            <div>
              <h3 className={`text-xl font-black uppercase tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                {title}
              </h3>
              <p className="text-[10px] text-slate-500 font-bold uppercase tracking-tighter mt-1">
                {subtitle ?? `${data.length} accounts match your criteria`}
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <button onClick={onExport} className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-black uppercase tracking-widest text-xs transition-all ${isDark ? 'bg-white/5 hover:bg-white/10 text-white' : 'bg-white hover:bg-slate-50 text-slate-700'}`}>
              <Download size={16} /> Export
            </button>
            <button onClick={onEmailResults} className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-black uppercase tracking-widest text-xs transition-all ${isDark ? 'bg-white/5 hover:bg-white/10 text-white' : 'bg-white hover:bg-slate-50 text-slate-700'}`}>
              <Mail size={16} /> Email Results
            </button>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className={`border-b ${isDark ? 'border-white/5 bg-white/2' : 'border-slate-200 bg-white/50'}`}>
              <th className="px-6 py-4 text-left w-10">
                <input type="checkbox" checked={data.length > 0 && selectedIds.size === data.length} onChange={toggleSelectAll} className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer" />
              </th>
              {columns.map((col) => (
                <th key={col.key} style={{ textAlign: col.align ?? 'left' }} className={`px-6 py-4 text-xs font-black uppercase tracking-widest whitespace-nowrap ${isDark ? 'text-sky-300' : 'text-blue-600'}`}>
                  {col.title}
                </th>
              ))}
              {isExpandable && <th className="w-10" />}
            </tr>
          </thead>
          <tbody>
            {data.length === 0 ? (
              <tr>
                <td colSpan={columns.length + (isExpandable ? 2 : 1)} className={`px-6 py-16 text-center text-sm font-bold uppercase tracking-widest ${isDark ? 'text-slate-600' : 'text-slate-400'}`}>
                  No records found
                </td>
              </tr>
            ) : (
              data.map((row, idx) => {
                const id = getRowId(row);
                const isSelected = selectedIds.has(id);
                const isExpanded = isExpandable && expandedRow === id;

                return (
                  <Fragment key={String(id)}>

                    {/* Main row */}
                    <tr
                      onClick={() => toggleExpand(id)}
                      className={`border-b transition-colors ${isExpandable ? 'cursor-pointer' : ''} ${
                        isDark
                          ? `border-white/5 ${isSelected ? 'bg-blue-500/10' : idx % 2 === 0 ? 'bg-white/2' : 'hover:bg-white/5'}`
                          : `border-slate-200 ${isSelected ? 'bg-blue-100/30' : idx % 2 === 0 ? 'bg-gray-200' : 'hover:bg-white/60'}`
                      }`}
                    >
                      <td className="px-6 py-4">
                        <input type="checkbox" checked={isSelected} onChange={(e) => { e.stopPropagation(); toggleRow(id); }} className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer" />
                      </td>
                      {columns.map((col) => {
                        const value = getNestedValue(row, col.key);
                        return (
                          <td key={col.key} style={{ textAlign: col.align ?? 'left' }} className={`px-6 py-4 text-sm font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                            {col.render ? col.render(value, row, theme) : renderCell(value)}
                          </td>
                        );
                      })}
                      {isExpandable && (
                        <td className="px-4 py-4 text-right">
                          <span className={`inline-block transition-transform duration-300 text-slate-400 ${isExpanded ? 'rotate-180' : ''}`}>▾</span>
                        </td>
                      )}
                    </tr>

                    {/* Expanded panel */}
                    {isExpandable && (
                      <tr className={`transition-all duration-300 ${isExpanded ? 'opacity-100' : 'opacity-0 pointer-events-none'} ${isDark ? 'bg-white/10' : 'bg-blue-500/60'}`}>
                        <td colSpan={columns.length + 2} className="p-0">
                          <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-[500px]' : 'max-h-0'}`}>
                            <div className="px-6 py-5">
                              <div
                                className="grid gap-4 text-sm"
                                style={{ gridTemplateColumns: `repeat(${expandedFields!.length}, minmax(0, 1fr))` }}
                              >
                                {expandedFields!.map((field) => {
                                  // ── pulls the live value from the current row ──
                                  const value = getNestedValue(row, field.key);
                                  return (
                                    <div
                                      key={field.key}
                                      className={`flex flex-col items-center gap-1 ${field.separator ? 'border-l border-white/30 pl-4' : ''}`}
                                    >
                                      {/* Label */}
                                      <p className={`text-xs font-bold uppercase tracking-tighter whitespace-nowrap ${field.color ?? (isDark ? 'text-sky-300' : 'text-slate-800')}`}>
                                        {field.label}
                                      </p>
                                      {/* Value — uses custom render if provided, otherwise falls back to renderCell */}
                                      <p className="text-white text-center text-sm font-semibold">
                                        {field.render ? field.render(value, row, theme) : renderCell(value)}
                                      </p>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    )}

                  </Fragment>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className={`px-10 py-6 border-t flex items-center justify-between ${isDark ? 'border-white/5 bg-white/2' : 'border-slate-200 bg-white/30'}`}>
        <div className={`text-xs font-bold uppercase tracking-tighter ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
          {selectedIds.size} of {data.length} selected
        </div>
        <button
          disabled={selectedIds.size === 0}
          onClick={() => onBulkAction?.(selectedRows)}
          className={`px-6 py-3 rounded-2xl font-black uppercase tracking-widest text-xs transition-all ${
            selectedIds.size > 0 ? 'bg-blue-600 text-white shadow-xl shadow-blue-600/20 hover:bg-blue-700'
            : isDark ? 'bg-white/5 text-slate-500 cursor-not-allowed' : 'bg-slate-100 text-slate-400 cursor-not-allowed'
          }`}
        >
          {bulkActionLabel}
        </button>
      </div>
    </div>
  );
}

export default DynamicTable;