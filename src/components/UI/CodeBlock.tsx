import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Check, Copy } from 'lucide-react';

interface CodeBlockProps {
  code: string;
}

export function CodeBlock({ code }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative rounded-lg overflow-hidden border border-border my-6 bg-[#1e1e1e]" data-testid="code-block">
      <div className="flex items-center justify-between px-4 py-2 bg-black/40 border-b border-border/50 text-xs text-muted-foreground">
        <span className="font-mono">example.tsx</span>
        <button 
          onClick={handleCopy}
          className="flex items-center gap-1.5 hover:text-foreground transition-colors"
          data-testid="button-copy-code"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-green-500" /> : <Copy className="w-3.5 h-3.5" />}
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <SyntaxHighlighter
        language="tsx"
        style={vscDarkPlus}
        customStyle={{
          margin: 0,
          padding: '1.5rem',
          fontSize: '0.875rem',
          background: 'transparent'
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
