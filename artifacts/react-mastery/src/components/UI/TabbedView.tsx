import React, { useState } from 'react';
import { CodeBlock } from './CodeBlock';
import { Code2, Eye } from 'lucide-react';

interface TabbedViewProps {
  code: string;
  previewDescription: string;
}

export function TabbedView({ code, previewDescription }: TabbedViewProps) {
  const [activeTab, setActiveTab] = useState<'code' | 'preview'>('code');

  return (
    <div className="rounded-xl border border-border bg-card overflow-hidden my-6" data-testid="tabbed-view">
      <div className="flex items-center border-b border-border bg-black/20">
        <button
          onClick={() => setActiveTab('code')}
          className={`flex items-center gap-2 px-4 py-3 text-sm font-medium transition-colors ${
            activeTab === 'code' 
              ? 'text-primary border-b-2 border-primary bg-primary/5' 
              : 'text-muted-foreground hover:text-foreground hover:bg-white/5'
          }`}
          data-testid="button-tab-code"
        >
          <Code2 className="w-4 h-4" />
          Code
        </button>
        <button
          onClick={() => setActiveTab('preview')}
          className={`flex items-center gap-2 px-4 py-3 text-sm font-medium transition-colors ${
            activeTab === 'preview' 
              ? 'text-primary border-b-2 border-primary bg-primary/5' 
              : 'text-muted-foreground hover:text-foreground hover:bg-white/5'
          }`}
          data-testid="button-tab-preview"
        >
          <Eye className="w-4 h-4" />
          Preview
        </button>
      </div>

      <div className="p-0">
        {activeTab === 'code' ? (
          <div className="[&>div]:my-0 [&>div]:border-none [&>div]:rounded-none">
            <CodeBlock code={code} />
          </div>
        ) : (
          <div className="p-8 flex flex-col items-center justify-center min-h-[200px] text-center bg-background/50" data-testid="tab-preview-content">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Code2 className="w-8 h-8 text-primary" />
            </div>
            <p className="text-muted-foreground max-w-md">
              {previewDescription}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
