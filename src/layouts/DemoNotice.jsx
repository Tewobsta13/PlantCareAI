import { useState } from 'react';
import Icon from '../components/Icon';
import { DEMO_NOTICE } from '../data/site';

/** Persistent, non-intrusive reminder that everything in this build is sample content. */
export default function DemoNotice() {
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed bottom-3 left-3 sm:bottom-4 sm:left-4 z-40 flex flex-col items-start gap-space-sm">
      {open && (
        <div
          role="dialog"
          aria-label="About this demo build"
          className="max-w-[300px] rounded-lg border border-outline-variant bg-surface-container-lowest p-space-md shadow-[0_12px_32px_-4px_rgba(23,61,43,0.12),0_2px_6px_-1px_rgba(23,61,43,0.04)]"
        >
          <p className="font-label-md text-label-md text-primary-container mb-1">Demo build</p>
          <p className="font-body-sm text-body-sm text-on-surface-variant">{DEMO_NOTICE}</p>
        </div>
      )}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="inline-flex items-center gap-1.5 rounded-full border border-dashed border-outline bg-surface-container-lowest/95 px-3 py-1.5 font-label-sm text-label-sm text-on-surface-variant shadow-sm backdrop-blur hover:bg-surface-container transition-colors"
      >
        <Icon name="science" size={14} />
        Demo build · sample data
      </button>
    </div>
  );
}
