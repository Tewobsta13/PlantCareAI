import { images } from '../../assets/images';

export default function PhotographyGuide() {
  return (
    <div className="bg-surface-container-lowest rounded-2xl p-space-md sm:p-space-lg shadow-md flex flex-col gap-space-lg">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-space-sm">
          <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-primary-container">
            <span className="material-symbols-outlined text-[20px]">camera_enhance</span>
          </div>
          <h2 className="font-headline-sm text-headline-sm text-primary-container">Photography Best Practices</h2>
        </div>
        <span className="font-label-sm text-label-sm text-on-surface-variant bg-surface-container px-2 py-0.5 rounded">Field Protocol</span>
      </div>
      {/* DOs Section */}
      <div className="bg-surface-container-low rounded-xl p-space-md">
        <div className="flex items-center gap-2 mb-space-sm">
          <span className="w-6 h-6 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center">
            <span className="material-symbols-outlined text-[16px]">check</span>
          </span>
          <span className="font-label-lg text-label-lg text-secondary font-bold">Recommended Capture (DO)</span>
        </div>
        <div className="grid grid-cols-2 gap-space-sm mb-space-md">
          <div className="relative h-28 rounded-lg overflow-hidden bg-primary-container">
            <img
              src={images.guideDoSingleLeaf}
              className="w-full h-full object-cover"
              alt="Macro botanical photography of a single leaf specimen under soft overcast daylight, crisp green texture, clear leaf veins in sharp focus with neutral paper background"
            />
            <span className="absolute bottom-1 left-1 px-1.5 py-0.5 rounded bg-primary/80 text-on-primary font-label-sm text-[10px]">
              Optimal Specimen
            </span>
          </div>
          <div className="relative h-28 rounded-lg overflow-hidden bg-primary-container">
            <img
              src={images.guideDoPerpendicular}
              className="w-full h-full object-cover"
              alt="Top down overhead perpendicular camera angle of a single diseased garden leaf with clearly visible yellow spots, flat and in sharp focus against natural mulch"
            />
            <span className="absolute bottom-1 left-1 px-1.5 py-0.5 rounded bg-primary/80 text-on-primary font-label-sm text-[10px]">
              Perpendicular Angle
            </span>
          </div>
        </div>
        <ul className="space-y-2 font-body-sm text-body-sm text-on-surface-variant">
          <li className="flex items-start gap-2">
            <span className="material-symbols-outlined text-secondary text-[16px] mt-0.5">check_circle</span>
            <span>
              <strong>Single leaf focused:</strong> Fill at least 70% of viewport with targeted foliar surface.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="material-symbols-outlined text-secondary text-[16px] mt-0.5">check_circle</span>
            <span>
              <strong>Diffuse natural daylight:</strong> Overcast morning light eliminates harsh specular reflections.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="material-symbols-outlined text-secondary text-[16px] mt-0.5">check_circle</span>
            <span>
              <strong>Perpendicular plane:</strong> Maintain 90° sensor alignment to minimize depth aberration.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="material-symbols-outlined text-secondary text-[16px] mt-0.5">check_circle</span>
            <span>
              <strong>Sharp focus on lesions:</strong> Tap screen directly over necrotic or chlorotic spots.
            </span>
          </li>
        </ul>
      </div>
      {/* DONTs Section */}
      <div className="bg-surface-container-low rounded-xl p-space-md">
        <div className="flex items-center gap-2 mb-space-sm">
          <span className="w-6 h-6 rounded-full bg-error-container text-on-error-container flex items-center justify-center">
            <span className="material-symbols-outlined text-[16px]">close</span>
          </span>
          <span className="font-label-lg text-label-lg text-error font-bold">Avoid These Pitfalls (DON'T)</span>
        </div>
        <div className="grid grid-cols-2 gap-space-sm mb-space-md">
          <div className="relative h-28 rounded-lg overflow-hidden bg-primary-container">
            <img
              src={images.guideDontMotionBlur}
              className="w-full h-full object-cover filter blur-[1px]"
              alt="Motion blurred photography of green outdoor plants with heavy shaking artifacts and unfocused foliage"
            />
            <span className="absolute bottom-1 left-1 px-1.5 py-0.5 rounded bg-error/90 text-on-error font-label-sm text-[10px]">
              Motion Blur
            </span>
          </div>
          <div className="relative h-28 rounded-lg overflow-hidden bg-primary-container">
            <img
              src={images.guideDontGlare}
              className="w-full h-full object-cover"
              alt="Photograph of a leaf with heavy harsh sunlight flare, intense specular highlights and fingers completely covering the leaf blade"
            />
            <span className="absolute bottom-1 left-1 px-1.5 py-0.5 rounded bg-error/90 text-on-error font-label-sm text-[10px]">
              Glare &amp; Occlusion
            </span>
          </div>
        </div>
        <ul className="space-y-2 font-body-sm text-body-sm text-on-surface-variant">
          <li className="flex items-start gap-2">
            <span className="material-symbols-outlined text-error text-[16px] mt-0.5">cancel</span>
            <span>
              <strong>Blurry or shaking camera:</strong> Motion blur obscures microscopic fungal hyphae.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="material-symbols-outlined text-error text-[16px] mt-0.5">cancel</span>
            <span>
              <strong>Direct harsh noon glare:</strong> Washes out subtle chlorotic color gradations.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="material-symbols-outlined text-error text-[16px] mt-0.5">cancel</span>
            <span>
              <strong>Multiple tangled leaves:</strong> Distant canopy captures cause tensor background noise.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="material-symbols-outlined text-error text-[16px] mt-0.5">cancel</span>
            <span>
              <strong>Heavy thumb/finger blockage:</strong> Masking symptomatic tissue skews pathogen diagnosis.
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
