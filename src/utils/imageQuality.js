/**
 * Quick, local, heuristic checks on an uploaded image (no AI, nothing leaves the browser):
 *  - sharpness: variance of a Laplacian on a downscaled grayscale copy
 *  - coverage: share of green-dominant pixels
 *  - glare: share of near-white pixels
 * These are rough estimates for guidance only.
 */
export function measureImageQuality(img, maxSide = 256) {
  const scale = Math.min(1, maxSide / Math.max(img.naturalWidth, img.naturalHeight));
  const w = Math.max(8, Math.round(img.naturalWidth * scale));
  const h = Math.max(8, Math.round(img.naturalHeight * scale));
  const canvas = document.createElement('canvas');
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext('2d', { willReadFrequently: true });
  ctx.drawImage(img, 0, 0, w, h);
  const { data } = ctx.getImageData(0, 0, w, h);
  const gray = new Float32Array(w * h);
  let green = 0,
    glare = 0;
  for (let i = 0; i < w * h; i++) {
    const r = data[i * 4],
      g = data[i * 4 + 1],
      b = data[i * 4 + 2];
    gray[i] = 0.299 * r + 0.587 * g + 0.114 * b;
    if (g > r * 1.05 && g > b * 1.1) green++;
    if (Math.min(r, g, b) > 240) glare++;
  }
  let sum = 0,
    sumSq = 0,
    n = 0;
  for (let y = 1; y < h - 1; y++) {
    for (let x = 1; x < w - 1; x++) {
      const i = y * w + x;
      const lap = 4 * gray[i] - gray[i - 1] - gray[i + 1] - gray[i - w] - gray[i + w];
      sum += lap;
      sumSq += lap * lap;
      n++;
    }
  }
  const variance = sumSq / n - (sum / n) ** 2;
  const clamp = (v) => Math.max(0, Math.min(100, v));
  return {
    sharpness: Math.round(clamp((variance / 400) * 100) * 10) / 10,
    coverage: Math.round(clamp((green / (w * h)) * 100) * 10) / 10,
    glare: Math.round(clamp((glare / (w * h)) * 100) * 10) / 10,
  };
}
