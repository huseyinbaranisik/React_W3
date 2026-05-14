import React, { useState } from 'react';
import { Play, RotateCcw } from 'lucide-react';

export function LivePlayground() {
  const [count, setCount] = useState(0);

  return (
    <div className="rounded-xl border border-border bg-card overflow-hidden my-8" data-testid="live-playground">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-black/20">
        <Play className="w-4 h-4 text-primary" />
        <h3 className="text-sm font-medium">Live Playground</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="p-6 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-border bg-background/50">
          <div className="text-5xl font-bold text-foreground mb-6" data-testid="text-playground-count">
            {count}
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setCount(prev => prev - 1)}
              className="px-4 py-2 rounded-md bg-secondary/10 text-secondary hover:bg-secondary/20 transition-colors"
              data-testid="button-playground-decrement"
            >
              Decrement
            </button>
            <button 
              onClick={() => setCount(prev => prev + 1)}
              className="px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors shadow-[0_0_15px_rgba(168,85,247,0.4)]"
              data-testid="button-playground-increment"
            >
              Increment
            </button>
          </div>
          <button 
            onClick={() => setCount(0)}
            className="mt-6 flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
            data-testid="button-playground-reset"
          >
            <RotateCcw className="w-3.5 h-3.5" /> Reset
          </button>
        </div>
        
        <div className="p-0 bg-[#1e1e1e]">
          <pre className="text-xs font-mono text-gray-300 p-6 m-0 overflow-auto h-full">
            <code dangerouslySetInnerHTML={{ __html: `import { useState } from 'react';

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count - 1)}>
        Decrement
      </button>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
}` }} />
          </pre>
        </div>
      </div>
    </div>
  );
}
