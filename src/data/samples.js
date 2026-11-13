// Built-in demo specimens for the Detect page. Each maps to a disease in data/diseases.js.
// Quality values are SAMPLE numbers (remote demo images cannot be measured in-browser).
export const SAMPLES = [
  {
    id: 'early-blight',
    label: 'Tomato Early Blight',
    dot: 'bg-error',
    diseaseId: 'early-blight',
    image: 'sampleEarlyBlight',
    fileName: 'tomato_early_blight_sample.jpg',
    quality: { sharpness: 96.8, coverage: 84.2, glare: 2.1 },
  },
  {
    id: 'healthy',
    label: 'Tomato Healthy Foliage',
    dot: 'bg-secondary',
    diseaseId: 'healthy',
    image: 'libHealthyTomato',
    fileName: 'tomato_healthy_foliage_sample.jpg',
    quality: { sharpness: 94.1, coverage: 88.6, glare: 1.4 },
  },
  {
    id: 'bacterial-spot',
    label: 'Tomato Bacterial Spot',
    dot: 'bg-amber-600',
    diseaseId: 'bacterial-spot',
    image: 'libBacterialSpot',
    fileName: 'tomato_bacterial_spot_sample.jpg',
    quality: { sharpness: 91.3, coverage: 79.8, glare: 3.2 },
  },
  {
    id: 'late-blight',
    label: 'Tomato Late Blight',
    dot: 'bg-outline',
    diseaseId: 'late-blight',
    image: 'libLateBlight',
    fileName: 'tomato_late_blight_sample.jpg',
    quality: { sharpness: 92.7, coverage: 81.5, glare: 2.6 },
  },
];
export const getSample = (id) => SAMPLES.find((s) => s.id === id);
