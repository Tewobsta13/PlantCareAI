import { createContext, useCallback, useMemo, useState } from 'react';

export const AnalysisContext = createContext(null);

/** Holds the latest analysis response and what was submitted, so /results can render it. */
export default function AnalysisProvider({ children }) {
  const [state, setState] = useState({ result: null, submission: null });
  const setAnalysis = useCallback((result, submission) => setState({ result, submission }), []);
  const clearAnalysis = useCallback(() => setState({ result: null, submission: null }), []);
  const value = useMemo(() => ({ ...state, setAnalysis, clearAnalysis }), [state, setAnalysis, clearAnalysis]);
  return <AnalysisContext.Provider value={value}>{children}</AnalysisContext.Provider>;
}
