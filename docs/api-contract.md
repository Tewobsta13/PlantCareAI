# Analysis API contract (v1.0)

The UI reads **only** this shape. The mock (`src/services/mockAnalysis.js`) and the future FastAPI endpoint must both return it.
Types are documented in `src/services/analysisContract.js`.

`POST /api/v1/analyze` — `multipart/form-data`, field `image` → `200 application/json`

```json
{
  "schema_version": "1.0",
  "request_id": "string",
  "is_sample": false,
  "created_at": "2026-01-01T12:00:00Z",
  "model": { "name": "plantcare-resnet", "version": "0.1.0", "mode": "live" },
  "input": { "filename": "leaf.jpg", "size_bytes": 123456, "source": "upload" },
  "timings_ms": { "inference": 184 },
  "specimen": { "id": "string", "crop_common_name": "Tomato", "crop_scientific_name": "Solanum lycopersicum", "location_label": "string" },
  "prediction": { "disease_id": "early-blight", "label": "Early Blight", "scientific_name": "Alternaria solani", "confidence": 0.948, "status_label": "Fungal Pathogen Detected", "category": "fungal" },
  "probabilities": [{ "label": "Early Blight (Alternaria solani)", "probability": 0.948 }],
  "localization": { "available": true, "image_url": "https://…", "heatmap_url": null, "regions": [{ "id": 1, "label": "Lesion", "confidence": 0.96, "x": 0.34, "y": 0.5, "w": 0.2, "h": 0.3 }], "illustrative": false },
  "metrics": { "affected_area_pct": 18.5, "affected_area_tier": "Moderate Tier", "pathogen_class": "Ascomycete", "pathogen_family": "Pleosporaceae", "primary_vector": "Free Moisture", "primary_vector_detail": "Airborne Conidia" },
  "report": {
    "description": "string", "risk": "string",
    "signatures": [{ "label": "string", "text": "string" }],
    "triggers": [{ "icon": "water_drop", "title": "string", "text": "string" }],
    "management": { "cultural": [{ "title": "string", "text": "string" }], "chemical": [{ "title": "string", "text": "string" }] },
    "reference": { "title": "string", "description": "string", "image_url": null }
  }
}
```

Rules: `confidence`/`probability`/region coords are 0–1. `category` ∈ `healthy|fungal|oomycete|bacterial|other`.
When `is_sample` is `true` the UI shows sample labelling; a real backend returns `false` and `localization.illustrative: false`.
`heatmap_url`, if provided, is drawn instead of `regions`.

## Pydantic sketch
```python
class Prediction(BaseModel):
    disease_id: str; label: str; scientific_name: str
    confidence: float = Field(ge=0, le=1); status_label: str
    category: Literal["healthy","fungal","oomycete","bacterial","other"]
class AnalysisResponse(BaseModel):
    schema_version: Literal["1.0"] = "1.0"
    request_id: str; is_sample: bool = False; created_at: datetime
    prediction: Prediction  # …remaining fields as in the JSON above
```

## Going live
1. Set `VITE_USE_MOCK_ANALYSIS=false` and `VITE_API_BASE_URL`.
2. Add CORS for the Vite origin in FastAPI.
No component changes should be needed.
