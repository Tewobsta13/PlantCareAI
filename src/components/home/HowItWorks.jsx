import { images } from '../../assets/images';
import PlaceholderAction from '../PlaceholderAction';

export default function HowItWorks() {
  return (
    <section className="w-full bg-surface-container-low py-space-2xl" id="how-it-works">
      <div className="max-w-[1440px] mx-auto px-margin-mobile sm:px-margin">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-xl">
          <div className="flex flex-col gap-space-xs max-w-2xl">
            <span className="font-label-md text-label-md text-secondary uppercase tracking-wider font-semibold">Diagnostic Lifecycle</span>
            <h2 className="font-headline-xl-mobile text-headline-xl-mobile sm:font-headline-xl sm:text-headline-xl text-primary">
              How PlantCare AI Operates in the Field
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              From leaf photography to calibrated treatment agronomy in under three seconds. No specialized lab gear required.
            </p>
          </div>
          <div className="font-label-md text-label-md text-on-surface-variant flex items-center gap-1">
            <span className="material-symbols-outlined text-[18px]">verified_user</span>
            <span>Standards alignment: placeholder</span>
          </div>
        </div>
        {/* 3-Step Mosaic Flow */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {/* Step 1 */}
          <div className="bg-surface-container-lowest p-space-md sm:p-space-lg rounded-2xl shadow-sm flex flex-col justify-between">
            <div className="flex flex-col gap-space-md">
              <div className="flex items-center justify-between">
                <span className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center font-headline-sm text-headline-sm text-primary">
                  1
                </span>
                <span className="material-symbols-outlined text-[28px] text-secondary">photo_camera</span>
              </div>
              <div>
                <h3 className="font-headline-sm text-headline-sm text-primary-container mb-space-xs">Capture &amp; Upload</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Take a high-resolution leaf photo under natural daylight using any smartphone, drone optical payload, or tablet.
                  Intelligent framing guides angle and light alignment.
                </p>
              </div>
            </div>
            <div className="mt-space-lg rounded-xl overflow-hidden bg-surface-container-high h-40">
              <img
                src={images.homeTechnician}
                className="w-full h-full object-cover"
                alt="Close up shot of agricultural technician hands holding a smartphone photographing an infected cucumber plant leaf in a sunlit modern commercial greenhouse"
              />
            </div>
          </div>
          {/* Step 2 */}
          <div className="bg-surface-container-lowest p-space-md sm:p-space-lg rounded-2xl shadow-sm flex flex-col justify-between">
            <div className="flex flex-col gap-space-md">
              <div className="flex items-center justify-between">
                <span className="w-10 h-10 rounded-xl bg-secondary-container flex items-center justify-center font-headline-sm text-headline-sm text-on-secondary-container">
                  2
                </span>
                <span className="material-symbols-outlined text-[28px] text-secondary">grain</span>
              </div>
              <div>
                <h3 className="font-headline-sm text-headline-sm text-primary-container mb-space-xs">Deep Foliar Analysis</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Neural classification models segment leaf tissue to cross-examine chlorotic discoloration, concentric lesions, necrotic
                  margins, and fungal mycelium signatures.
                </p>
              </div>
            </div>
            {/* Inline SVG Representation of Neural Feature Segmentation */}
            <div className="mt-space-lg p-space-md rounded-xl bg-primary-container text-on-primary flex flex-col justify-between h-40">
              <div className="flex items-center justify-between text-body-sm font-code-mono">
                <span>SCAN_DEEP_CONV</span>
                <span className="text-secondary-fixed">ILLUSTRATIVE</span>
              </div>
              <div className="flex items-center justify-center py-2">
                <svg className="w-full h-16 text-secondary-fixed-dim" fill="none" viewBox="0 0 240 60" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 30 Q 60 5, 120 30 T 230 30" stroke="currentColor" strokeDasharray="4 4" strokeWidth="2" />
                  <circle cx="40" cy="20" fill="#87d8a0" r="6" />
                  <circle cx="120" cy="30" fill="#a2f5bb" r="7" />
                  <circle cx="180" cy="25" fill="#87d8a0" r="5" />
                  <rect height="40" rx="4" stroke="#87d8a0" strokeWidth="1.5" width="40" x="100" y="10" />
                </svg>
              </div>
              <div className="flex justify-between items-center text-label-sm font-label-sm text-on-primary-container">
                <span>Necrosis Seg: 98.7% (sample)</span>
                <span>Spore Radius: 0.8mm (sample)</span>
              </div>
            </div>
          </div>
          {/* Step 3 */}
          <div className="bg-surface-container-lowest p-space-md sm:p-space-lg rounded-2xl shadow-sm flex flex-col justify-between">
            <div className="flex flex-col gap-space-md">
              <div className="flex items-center justify-between">
                <span className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center font-headline-sm text-headline-sm text-primary">
                  3
                </span>
                <span className="material-symbols-outlined text-[28px] text-secondary">prescriptions</span>
              </div>
              <div>
                <h3 className="font-headline-sm text-headline-sm text-primary-container mb-space-xs">Targeted Agronomic Action</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Receive symptom descriptions, illustrative biological and cultural management options, and guidance to confirm with a
                  qualified agronomist.
                </p>
              </div>
            </div>
            <div className="mt-space-lg p-space-md rounded-xl bg-surface-container-low flex flex-col gap-2 h-40 justify-center">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-secondary"></span>
                <span className="font-label-md text-label-md text-primary">Sample Action Plan</span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Illustrative example: remove affected lower leaves, improve airflow, and confirm any treatment with a local agronomist.
              </p>
              <PlaceholderAction
                as="button"
                message="Field cards are not available in the demo build."
                className="flex items-center gap-1 font-label-sm text-label-sm text-secondary hover:underline"
              >
                <span className="material-symbols-outlined text-[16px]">download</span>
                <span>Export PDF Field Card</span>
              </PlaceholderAction>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
