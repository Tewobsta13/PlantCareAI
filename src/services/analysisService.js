import { AnalysisError } from './analysisContract';
import { mockAnalyze } from './mockAnalysis';

/**
 * Single entry point the UI uses. To go live:
 *   VITE_USE_MOCK_ANALYSIS=false  and  VITE_API_BASE_URL=https://your-fastapi-host
 * No component needs to change as long as the backend returns the AnalysisResponse contract.
 * By default (and in this prototype) NO network request is made.
 */
const USE_MOCK = import.meta.env.VITE_USE_MOCK_ANALYSIS !== 'false';
const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL ?? '').replace(/\/$/, '');

async function apiAnalyze({ file }, { signal } = {}) {
  if (!file) throw new AnalysisError('Select an image file to analyze.', 'no_file');
  const body = new FormData();
  body.append('image', file);
  const res = await fetch(`${API_BASE_URL}/api/v1/analyze`, { method: 'POST', body, signal });
  if (!res.ok) throw new AnalysisError(`Analysis request failed (${res.status}).`, 'http_error');
  return res.json();
}

/**
 * @param {{file?: File, sampleId?: string}} input
 * @param {{signal?: AbortSignal}} [options]
 * @returns {Promise<import('./analysisContract').AnalysisResponse>}
 */
export function analyzeLeaf(input, options) {
  return USE_MOCK ? mockAnalyze(input, options) : apiAnalyze(input, options);
}
