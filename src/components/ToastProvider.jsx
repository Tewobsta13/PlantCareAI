import { createContext, useCallback, useEffect, useRef, useState } from 'react';
import Icon from './Icon';

export const ToastContext = createContext({ notify: () => {} });

/** Minimal, accessible toast used for placeholder actions that have no backend yet. */
export default function ToastProvider({ children }) {
  const [message, setMessage] = useState(null);
  const timer = useRef(null);

  const notify = useCallback((text) => {
    setMessage(text);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setMessage(null), 3600);
  }, []);

  useEffect(() => () => clearTimeout(timer.current), []);

  return (
    <ToastContext.Provider value={{ notify }}>
      {children}
      <div
        aria-live="polite"
        role="status"
        className="pointer-events-none fixed inset-x-0 bottom-6 z-[70] flex justify-center px-margin-mobile"
      >
        {message && (
          <div className="pointer-events-auto flex max-w-md items-start gap-space-sm rounded-lg bg-inverse-surface px-space-md py-space-sm text-inverse-on-surface shadow-[0_12px_32px_-4px_rgba(23,61,43,0.12),0_2px_6px_-1px_rgba(23,61,43,0.04)]">
            <Icon name="info" size={18} className="mt-0.5 text-inverse-primary" />
            <p className="font-body-md text-body-md">{message}</p>
            <button
              type="button"
              onClick={() => setMessage(null)}
              aria-label="Dismiss"
              className="-mr-1 ml-1 rounded p-0.5 hover:bg-white/10"
            >
              <Icon name="close" size={16} />
            </button>
          </div>
        )}
      </div>
    </ToastContext.Provider>
  );
}
