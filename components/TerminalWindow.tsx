import React from 'react';

export function TerminalWindow({ 
  title, 
  children, 
  className = "", 
  style 
}: { 
  title: string;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div className={`rounded-[22px] overflow-hidden border border-dim/20 bg-panel shadow-2xl ${className}`} style={style}>
      {/* Title bar */}
      <div className="flex items-center px-4 py-3 border-b border-dim/20 bg-base relative z-30">
        <div className="flex space-x-2 absolute left-4">
          <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
        </div>
        <div className="mx-auto text-xs text-dim font-mono">{title}</div>
      </div>
      {/* Body */}
      <div className="p-6 sm:p-10 relative z-20">
        {children}
      </div>
    </div>
  );
}
