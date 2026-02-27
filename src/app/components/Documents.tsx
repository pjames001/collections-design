import React, { useState } from 'react';
import { Folder, FileText, ChevronLeft, MoreVertical, HardDrive } from 'lucide-react';

interface FileItem {
  id: string;
  name: string;
  type: 'file';
  size: string;
}

interface FolderItem {
  id: string;
  name: string;
  type: 'folder';
  files: FileItem[];
}

const Documents: React.FC<{ theme: 'dark' | 'light' }> = ({ theme }) => {
  // Mock Data
  const [directory] = useState<FolderItem[]>([
    {
      id: '1',
      name: 'Client agreements',
      type: 'folder',
      files: [
        { id: 'f1', name: 'Standard_contract.pdf', type: 'file', size: '1.2mb' },
        { id: 'f2', name: 'Service_level_agreement.docx', type: 'file', size: '850kb' }
      ]
    },
    {
      id: '2',
      name: 'Financial reports',
      type: 'folder',
      files: [{ id: 'f3', name: 'Q1_earnings.csv', type: 'file', size: '2.4mb' }]
    },
    {
      id: '3',
      name: 'Legal notices',
      type: 'folder',
      files: []
    }
  ]);

  const [activeFolder, setActiveFolder] = useState<FolderItem | null>(null);

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      {/* Header & Breadcrumb */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          {activeFolder && (
            <button 
              onClick={() => setActiveFolder(null)}
              className={`p-2 rounded-full transition-colors ${theme === 'dark' ? 'hover:bg-white/5 text-white' : 'hover:bg-slate-100 text-slate-600'}`}
            >
              <ChevronLeft size={20} />
            </button>
          )}
          <div>
            <h2 className={`text-2xl font-normal ${theme === 'dark' ? 'text-white' : 'text-slate-800'}`}>
              {activeFolder ? activeFolder.name : 'Documents'}
            </h2>
            <p className="text-xs text-blue-500 flex items-center gap-1">
              <HardDrive size={12} />
              {activeFolder ? `Internal storage / ${activeFolder.name}` : 'Root directory'}
            </p>
          </div>
        </div>
      </div>

      {/* Grid Container */}
      <div className={`p-8 rounded-[35px] border min-h-[400px] transition-all
        ${theme === 'dark' ? 'bg-slate-900/60 border-white/10' : 'bg-sky-50 border-blue-500/50 shadow-sm'}`}>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {!activeFolder ? (
            // Root View: Folders
            directory.map((folder) => (
              <div 
                key={folder.id}
                onDoubleClick={() => setActiveFolder(folder)}
                className="group flex flex-col items-center gap-3 cursor-pointer select-none w-max"
              >
                <div className={`w-20 h-20 flex items-center justify-center rounded-2xl transition-all
                  ${theme === 'dark' ? 'bg-white/5 group-hover:bg-blue-500/10' : 'bg-white border-2 border-blue-500/50 group-hover:bg-blue-50'}`}>
                  <Folder size={40} className="text-blue-500 group-hover:text-blue-500/60 transition-colors" />
                </div>
                <span className={`text-xs text-center transition-colors ${theme === 'dark' ? 'text-slate-400 group-hover:text-white' : 'text-slate-500 group-hover:text-slate-900'}`}>
                  {folder.name}
                </span>
              </div>
            ))
          ) : (
            // Folder View: Files
            activeFolder.files.length > 0 ? (
              activeFolder.files.map((file) => (
                <div key={file.id} className="group flex flex-col items-center gap-3 cursor-pointer select-none">
                  <div className={`w-20 h-20 flex items-center justify-center rounded-2xl transition-all
                    ${theme === 'dark' ? 'bg-white/5 group-hover:bg-slate-800' : 'bg-slate-50 group-hover:bg-slate-100'}`}>
                    <FileText size={40} className="text-slate-400 group-hover:text-blue-500 transition-colors" />
                  </div>
                  <div className="text-center">
                    <p className={`text-xs truncate w-24 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>{file.name}</p>
                    <p className="text-[10px] text-slate-500">{file.size}</p>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full flex flex-col items-center justify-center py-20 opacity-30">
                <Folder size={48} className="mb-2" />
                <p className="text-sm">This folder is empty</p>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Documents;