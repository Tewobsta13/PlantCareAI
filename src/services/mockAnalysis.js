import { images } from '../assets/images';
import { getDisease } from '../data/diseases';
import { getSample } from '../data/samples';
import { AnalysisError, CONTRACT_VERSION } from './analysisContract';

const sleep = (ms, signal) =>
  new Promise((resolve, reject) => {
    const t = setTimeout(resolve, ms);
    signal?.addEventListener('abort', () => {
      clearTimeout(t);
      reject(new DOMException('Aborted', 'AbortError'));
    });
  });

// Illustrative lesion regions (normalised). Early blight matches the Stitch design's heatmap blobs.
const REGIONS = {
  'early-blight': [
    { id: 1, label: 'Alternaria Lesion', confidence: 0.962, x: 0.34, y: 0.5, w: 0.2, h: 0.3 },
    { id: 2, label: 'Lesion', confidence: 0.91, x: 0.5, y: 0.6, w: 0.16, h: 0.24 },
    { id: 3, label: 'Lesion', confidence: 0.88, x: 0.6, y: 0.42, w: 0.14, h: 0.2 },
  ],
  default: [
    { id: 1, label: 'Lesion', confidence: 0.9, x: 0.4, y: 0.5, w: 0.2, h: 0.28 },
    { id: 2, label: 'Lesion', confidence: 0.86, x: 0.58, y: 0.58, w: 0.14, h: 0.2 },
  ],
};

/** Build a response in the v1.0 contract from the demo knowledge set. */
export function buildSampleResponse({ diseaseId, input }) {
  const d = getDisease(diseaseId);
  const r = d.result;
  const rest = r.alternates ?? [];
  const probabilities = [
    { label: `${d.name} (${d.scientific})`, probability: r.confidence },
    ...rest.map((a) => ({ label: a.label, probability: a.p })),
  ];
  const imageKey = diseaseId === 'early-blight' ? 'resultsHeatmapLeaf' : d.image;
  return {
    schema_version: CONTRACT_VERSION,
    request_id: `sample-${Date.now().toString(36)}`,
    is_sample: true,
    created_at: new Date().toISOString(),
    model: { name: 'Mock analysis service', version: 'demo', mode: 'mock' },
    input,
    timings_ms: { inference: 0 },
    specimen: {
      id: `SMP-${d.taxon.no.replace('#', '')}`,
      crop_common_name: 'Tomato',
      crop_scientific_name: 'Solanum lycopersicum',
      location_label: 'Sample Plot · Demo Sector',
    },
    prediction: {
      disease_id: d.id,
      label: d.name,
      scientific_name: d.scientific,
      confidence: r.confidence,
      status_label: r.status,
      category: r.category,
    },
    probabilities,
    localization: {
      available: d.id !== 'healthy',
      image_url: images[imageKey],
      heatmap_url: null,
      regions: d.id === 'healthy' ? [] : (REGIONS[d.id] ?? REGIONS.default),
      illustrative: true, // mock overlay is NOT derived from the submitted image
    },
    metrics: {
      affected_area_pct: r.affectedArea,
      affected_area_tier: r.areaTier,
      pathogen_class: r.pathogenClass,
      pathogen_family: r.pathogenFamily,
      primary_vector: r.vector,
      primary_vector_detail: r.vectorDetail,
    },
    report: {
      description: r.description,
      risk: r.risk,
      signatures: r.signatures,
      triggers: r.triggers,
      management: { cultural: r.cultural, chemical: r.chemical },
      reference: {
        title: 'Reference specimen',
        description: 'Illustrative reference image of the sample specimen. No catalogue identifier is claimed in the demo build.',
        image_url: images.resultsHerbarium,
      },
    },
  };
}

/**
 * MOCK: no model runs and the image content is never inspected.
 * Built-in samples return their matching result; any uploaded file returns the Early Blight sample.
 * Add `?mock=error` to the URL to exercise the error state.
 */
export async function mockAnalyze({ file, sampleId }, { signal, delayMs = 2200 } = {}) {
  await sleep(delayMs, signal);
  if (new URLSearchParams(window.location.search).get('mock') === 'error') {
    throw new AnalysisError('The sample analysis service could not process this image. Please try again.', 'mock_failure');
  }
  const sample = sampleId ? getSample(sampleId) : null;
  const input = sample
    ? { filename: sample.fileName, size_bytes: null, source: 'sample' }
    : { filename: file?.name ?? 'upload', size_bytes: file?.size ?? null, source: 'upload' };
  return buildSampleResponse({ diseaseId: sample?.diseaseId ?? 'early-blight', input });
}
