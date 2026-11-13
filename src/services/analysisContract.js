/**
 * Analysis response contract, v1.0  — the ONLY shape the UI reads.
 * The mock service and the future FastAPI endpoint (POST /api/v1/analyze) must both return this.
 * Mirror it with Pydantic models on the backend. See docs/api-contract.md.
 *
 * @typedef {Object} AnalysisResponse
 * @property {'1.0'} schema_version
 * @property {string} request_id
 * @property {boolean} is_sample          true for mock data. The UI shows "sample" labelling whenever this is true.
 * @property {string} created_at          ISO-8601
 * @property {{name:string, version:string, mode:'mock'|'live'}} model
 * @property {{filename:string, size_bytes:(number|null), source:'upload'|'sample'}} input
 * @property {{inference:number}} timings_ms
 * @property {{id:string, crop_common_name:string, crop_scientific_name:string, location_label:string}} specimen
 * @property {Prediction} prediction
 * @property {Array<{label:string, probability:number}>} probabilities   probability 0..1, sorted desc, top-4
 * @property {Localization} localization
 * @property {Metrics} metrics
 * @property {Report} report
 *
 * @typedef {Object} Prediction
 * @property {string} disease_id
 * @property {string} label
 * @property {string} scientific_name
 * @property {number} confidence          0..1
 * @property {string} status_label
 * @property {'healthy'|'fungal'|'oomycete'|'bacterial'|'other'} category
 *
 * @typedef {Object} Localization
 * @property {boolean} available
 * @property {string|null} image_url       specimen/preview image to draw on
 * @property {string|null} heatmap_url     optional pre-rendered overlay (preferred when present)
 * @property {Array<{id:number,label:string,confidence:number,x:number,y:number,w:number,h:number}>} regions  normalised 0..1 (centre x/y, size w/h)
 * @property {boolean} illustrative        true when overlay is NOT derived from the submitted image
 *
 * @typedef {Object} Metrics
 * @property {number} affected_area_pct
 * @property {string} affected_area_tier
 * @property {string} pathogen_class
 * @property {string} pathogen_family
 * @property {string} primary_vector
 * @property {string} primary_vector_detail
 *
 * @typedef {Object} Report
 * @property {string} description
 * @property {string} risk
 * @property {Array<{label:string,text:string}>} signatures
 * @property {Array<{icon:string,title:string,text:string}>} triggers
 * @property {{cultural:Array<{title:string,text:string}>, chemical:Array<{title:string,text:string}>}} management
 * @property {{title:string, description:string, image_url:(string|null)}} reference
 */
export const CONTRACT_VERSION = '1.0';

export class AnalysisError extends Error {
  constructor(message, code = 'analysis_failed') {
    super(message);
    this.name = 'AnalysisError';
    this.code = code;
  }
}
