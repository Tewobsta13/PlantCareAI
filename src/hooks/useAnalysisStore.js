import { useContext } from 'react';
import { AnalysisContext } from '../components/AnalysisProvider';

export default function useAnalysisStore() {
  return useContext(AnalysisContext);
}
