import React, { useState } from 'react'

const AuditLogs = ({ theme }: { theme: 'dark' | 'light' }) => {

  const [selectedAccounts, setSelectedAccounts] = useState<Set<string>>(new Set());
  
    // Mock filtered accounts data
    const filteredAccounts = [
      { id: '1', accountNumber: 'ACC-001', debtorName: 'John Doe', clientName: '00:34:59', collector: 'John Smith', claimStatus: 'Active', legalStanding: 'No Legal', balanceDue: '$12,450.00', nextWorkDate: '2/25/2026 2:17:53 PM', originatedDate: '01/15/2026 3:21:59 PM' },
      { id: '2', accountNumber: 'ACC-002', debtorName: 'Jane Smith', clientName: '00:14:59', collector: 'Sarah Johnson', claimStatus: 'Overdue', legalStanding: 'In Litigation', balanceDue: '$8,920.50', nextWorkDate: '2/24/2026 2:17:53 PM', originatedDate: '12/20/2025 3:21:59 PM' },
      { id: '3', accountNumber: 'ACC-003', debtorName: 'Bob Wilson', clientName: '00:04:59', collector: 'Mike Davis', claimStatus: 'Pending', legalStanding: 'No Legal', balanceDue: '$15,680.00', nextWorkDate: '2/26/2026 2:17:53 PM', originatedDate: '10/01/2026 3:21:59 PM' },
      { id: '4', accountNumber: 'ACC-004', debtorName: 'Alice Brown', clientName: '00:44:59', collector: 'Emily Wilson', claimStatus: 'Active', legalStanding: 'Judgment', balanceDue: '$5,240.75', nextWorkDate: '2/27/2026 2:17:53 PM', originatedDate: '02/01/2026 3:21:59 PM' },
      { id: '5', accountNumber: 'ACC-005', debtorName: 'Charlie Davis', clientName: '00:54:59', collector: 'John Smith', claimStatus: 'Active', legalStanding: 'No Legal', balanceDue: '$22,105.25', nextWorkDate: '2/28/2026 2:17:53 PM', originatedDate: '11/15/2025 3:21:59 PM' },
    ];

  const toggleAccountSelection = (accountId: string) => {
    const newSelection = new Set(selectedAccounts);
    if (newSelection.has(accountId)) {
      newSelection.delete(accountId);
    } else {
      newSelection.add(accountId);
    }
    setSelectedAccounts(newSelection);
  };

  const toggleSelectAll = () => {
    if (selectedAccounts.size === filteredAccounts.length) {
      setSelectedAccounts(new Set());
    } else {
      setSelectedAccounts(new Set(filteredAccounts.map(acc => acc.id)));
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full rounded-xl overflow-hidden">
        <thead>
          <tr className={`border-b ${theme === 'dark' ? 'border-white/5 bg-white/2' : 'border-slate-200 bg-white/50'}`}>
            <th className={`px-6 py-4 text-left text-xs font-black uppercase tracking-widest ${theme === 'dark' ? 'text-sky-300' : 'text-blue-600'}`}>User</th>
            <th className={`px-6 py-4 text-left text-xs font-black uppercase tracking-widest ${theme === 'dark' ? 'text-sky-300' : 'text-blue-600'}`}>Start</th>
            <th className={`px-6 py-4 text-left text-xs font-black uppercase tracking-widest ${theme === 'dark' ? 'text-sky-300' : 'text-blue-600'}`}>End</th>
            <th className={`px-6 py-4 text-left text-xs font-black uppercase tracking-widest ${theme === 'dark' ? 'text-sky-300' : 'text-blue-600'}`}>Timespan</th>
          </tr>
        </thead>
        <tbody>
          {filteredAccounts.map((account, idx) => (
            <tr
              key={account.id}
              className={`border-b transition-colors ${
                theme === 'dark'
                  ? `border-white/5 ${selectedAccounts.has(account.id) ? 'bg-blue-500/10' : idx % 2 === 0 ? 'bg-white/2' : 'hover:bg-white/5'}`
                  : `border-slate-200 ${selectedAccounts.has(account.id) ? 'bg-blue-100/30' : idx % 2 === 0 ? 'bg-white/40' : 'hover:bg-white/60'}`
              }`}
            >
              <td className={`px-6 py-4 text-sm font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{account.debtorName}</td>
              <td className={`px-6 py-4 text-sm font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{account.nextWorkDate}</td>
              <td className={`px-6 py-4 text-sm font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{account.originatedDate}</td>
              <td className={`px-6 py-4 text-sm font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{account.clientName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default AuditLogs