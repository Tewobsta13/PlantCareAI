import { Link } from 'react-router-dom';
import { images } from '../../assets/images';
import SampleBadge from '../SampleBadge';

export default function Hero() {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-margin-mobile sm:px-margin pt-space-xl pb-space-2xl">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
        {/* Left Column: Copy & Actions */}
        <div className="lg:col-span-7 flex flex-col gap-space-lg">
          <div className="inline-flex items-center gap-space-xs self-start px-space-md py-1 rounded-full bg-surface-container-low text-primary-container">
            <span className="material-symbols-outlined text-[16px] text-secondary">psychiatry</span>
            <span className="font-label-md text-label-md uppercase tracking-wider">Precision Phytopathology AI</span>
          </div>
          <div className="flex flex-col gap-space-sm">
            <h1 className="font-display-lg-mobile text-display-lg-mobile sm:font-display-lg sm:text-display-lg text-primary tracking-tight">
              Healthy Plants Start With Early Detection.
            </h1>
            <p className="font-body-xl text-body-xl text-on-surface-variant max-w-2xl">
              Empowering growers, researchers, and agronomists with high-precision computer vision. Instantly identify foliar pathologies
              from leaf photographs before infections spread across the crop.
            </p>
          </div>
          {/* Metric Badges Row */}
          <div className="grid grid-cols-3 gap-space-sm max-w-lg pt-space-xs">
            <div className="bg-surface-container-low p-space-sm rounded-xl">
              <span className="font-label-sm text-label-sm text-on-surface-variant block uppercase">Classification</span>
              <span className="font-headline-md text-headline-md text-primary font-bold">99.4%</span>
              <span className="font-body-sm text-body-sm text-secondary flex items-center gap-0.5 mt-0.5">
                <span className="material-symbols-outlined text-[14px]">check_circle</span> Top-1 Acc
              </span>
            </div>
            <div className="bg-surface-container-low p-space-sm rounded-xl">
              <span className="font-label-sm text-label-sm text-on-surface-variant block uppercase">Latency</span>
              <span className="font-headline-md text-headline-md text-primary font-bold">240ms</span>
              <span className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-0.5 mt-0.5">
                <span className="material-symbols-outlined text-[14px]">bolt</span> Real-time
              </span>
            </div>
            <div className="bg-surface-container-low p-space-sm rounded-xl">
              <span className="font-label-sm text-label-sm text-on-surface-variant block uppercase">Taxa Catalog</span>
              <span className="font-headline-md text-headline-md text-primary font-bold">140+</span>
              <span className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-0.5 mt-0.5">
                <span className="material-symbols-outlined text-[14px]">eco</span> Pathogens
              </span>
            </div>
          </div>
          <div className="-mt-space-sm">
            <SampleBadge label="Sample figures — no model connected" />
          </div>
          {/* CTAs & Trust Indicator */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-space-md pt-space-xs">
            <Link
              className="inline-flex items-center justify-center gap-space-xs px-space-lg py-space-md bg-secondary text-on-secondary rounded-lg font-label-lg text-label-lg shadow-md hover:bg-primary-container transition-all active:scale-[0.98]"
              to="/detect"
            >
              <span className="material-symbols-outlined text-[20px]">filter_center_focus</span>
              <span>Detect Plant Disease</span>
            </Link>
            <Link
              className="inline-flex items-center justify-center gap-space-xs px-space-lg py-space-md bg-surface-container-low text-on-surface rounded-lg font-label-lg text-label-lg hover:bg-surface-container-high transition-all"
              to={{ pathname: '/', hash: '#how-it-works' }}
            >
              <span className="material-symbols-outlined text-[20px]">play_circle</span>
              <span>Explore How It Works</span>
            </Link>
          </div>
          <div className="flex items-center gap-space-md text-on-surface-variant pt-space-xs">
            <div className="flex -space-x-2">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-secondary text-on-secondary font-label-sm text-label-sm shadow-sm">
                P1
              </span>
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary-container text-on-primary font-label-sm text-label-sm shadow-sm">
                P2
              </span>
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-surface-container-highest text-on-surface-variant font-label-sm text-label-sm shadow-sm">
                P3
              </span>
            </div>
            <span className="font-body-sm text-body-sm">Placeholder avatars — no institutional affiliation implied</span>
          </div>
        </div>
        {/* Right Column: Visual Hero HUD Viewfinder Display */}
        <div className="lg:col-span-5 relative">
          <div className="relative rounded-2xl overflow-hidden bg-surface-container shadow-xl">
            {/* Foliar Sample Leaf Image */}
            <img
              src={images.homeHeroLeaf}
              className="w-full h-[520px] object-cover"
              alt="High-resolution clinical macro photograph of a healthy vibrant Solanum lycopersicum tomato plant leaf with visible deep green veins, natural dewdrops, sunlit agricultural greenhouse background, clean natural illumination, biological textbook precision, olive and chlorophyll green tones"
            />
            {/* Semi-translucent Diagnostic Scrim */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/10 to-transparent"></div>
            <SampleBadge label="Sample overlay" className="absolute top-3 left-1/2 -translate-x-1/2 z-10" />
            {/* Targeting HUD Corners */}
            <div className="absolute top-6 left-6 w-8 h-8 pointer-events-none">
              <div className="w-full h-0.5 bg-secondary-fixed"></div>
              <div className="w-0.5 h-full bg-secondary-fixed"></div>
            </div>
            <div className="absolute top-6 right-6 w-8 h-8 pointer-events-none flex flex-col items-end">
              <div className="w-full h-0.5 bg-secondary-fixed"></div>
              <div className="w-0.5 h-full bg-secondary-fixed"></div>
            </div>
            <div className="absolute bottom-24 left-6 w-8 h-8 pointer-events-none flex flex-col justify-end">
              <div className="w-0.5 h-full bg-secondary-fixed"></div>
              <div className="w-full h-0.5 bg-secondary-fixed"></div>
            </div>
            <div className="absolute bottom-24 right-6 w-8 h-8 pointer-events-none flex flex-col justify-end items-end">
              <div className="w-0.5 h-full bg-secondary-fixed"></div>
              <div className="w-full h-0.5 bg-secondary-fixed"></div>
            </div>
            {/* Central Scanning Reticle */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-48 h-48 rounded-2xl bg-secondary-container/10 flex items-center justify-center relative">
                <span className="material-symbols-outlined text-[48px] text-secondary-fixed-dim/60">view_in_ar</span>
                <div className="absolute -top-3 px-2 py-0.5 rounded-full bg-primary-container text-on-primary font-code-mono text-body-sm shadow">
                  ROI: FOLIAR_LAMINA_01
                </div>
              </div>
            </div>
            {/* Floating Confidence Pill Overlay (Hero Mandate) */}
            <div className="absolute bottom-6 inset-x-6 bg-surface-container-lowest/95 backdrop-blur-md p-space-md rounded-xl shadow-lg flex flex-col gap-space-xs">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-space-xs">
                  <span className="w-2.5 h-2.5 rounded-full bg-secondary"></span>
                  <span className="font-label-lg text-label-lg text-primary-container">Target: Solanum lycopersicum</span>
                </div>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-semibold">
                  99.4% Confidence
                </span>
              </div>
              <div className="flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm pt-0.5">
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px] text-secondary">verified</span> Healthy Foliage • No Pathogen
                  Signature
                </span>
                <span className="font-code-mono text-body-sm">sample overlay</span>
              </div>
              {/* Health Barometer Micro Indicators */}
              <div className="pt-space-xs flex items-center gap-2">
                <div className="flex-1 bg-surface-container rounded-full h-1.5 overflow-hidden">
                  <div className="bg-secondary h-full rounded-full w-[94%]"></div>
                </div>
                <div className="flex-1 bg-surface-container rounded-full h-1.5 overflow-hidden">
                  <div className="bg-secondary h-full rounded-full w-[88%]"></div>
                </div>
                <div className="flex-1 bg-surface-container rounded-full h-1.5 overflow-hidden">
                  <div className="bg-secondary h-full rounded-full w-[98%]"></div>
                </div>
              </div>
              <div className="flex justify-between font-label-sm text-label-sm text-on-surface-variant">
                <span>Nitrogen Index</span>
                <span>Chlorophyll Map</span>
                <span>Cellular Turgor</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
