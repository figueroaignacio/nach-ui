import React from 'react';

export function Snippet({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-[100px] items-center" role="region" aria-label="Code snippet">
      <div className="bg-primary-foreground w-full rounded-xl px-6 py-3">{children}</div>
    </div>
  );
}
Snippet.displayName = 'Snippet';
