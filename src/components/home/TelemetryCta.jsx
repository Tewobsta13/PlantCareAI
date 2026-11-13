import { Link } from 'react-router-dom';
import { images } from '../../assets/images';
import PlaceholderAction from '../PlaceholderAction';

export default function TelemetryCta() {
  return (
    <section className="w-full bg-surface-container-low py-space-2xl">
      <div className="max-w-[1440px] mx-auto px-margin-mobile sm:px-margin">
        <div className="bg-primary text-on-primary rounded-3xl p-space-md sm:p-space-xl lg:p-space-2xl shadow-xl flex flex-col lg:flex-row items-center justify-between gap-space-xl">
          <div className="flex flex-col gap-space-md max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-container text-secondary-fixed text-label-sm font-label-sm self-start">
              <span className="material-symbols-outlined text-[16px]">biotech</span> Demo Preview
            </div>
            <h2 className="font-headline-xl-mobile text-headline-xl-mobile sm:font-headline-xl sm:text-headline-xl text-on-primary">
              Ready to Preview a Field Diagnostic Run?
            </h2>
            <p className="font-body-lg text-body-lg text-on-primary-container">
              Add a leaf photo from your smartphone or sensor archive and walk through the full workflow. Results in this build are clearly
              labeled samples.
            </p>
            <div className="flex flex-wrap gap-space-sm pt-space-xs">
              <Link
                className="inline-flex items-center gap-space-xs px-space-lg py-space-md bg-secondary-fixed text-on-secondary-fixed rounded-lg font-label-lg text-label-lg shadow-md hover:bg-secondary-container transition-all active:scale-[0.98]"
                to="/detect"
              >
                <span className="material-symbols-outlined text-[20px]">add_photo_alternate</span>
                <span>Launch Diagnostic Tool</span>
              </Link>
              <PlaceholderAction
                className="inline-flex items-center gap-space-xs px-space-lg py-space-md bg-primary-container text-on-primary rounded-lg font-label-lg text-label-lg hover:bg-primary-container/80 transition-all"
                message="API docs are not available yet. The FastAPI backend is not connected."
              >
                <span className="material-symbols-outlined text-[20px]">terminal</span>
                <span>API Integration Docs</span>
              </PlaceholderAction>
            </div>
          </div>
          {/* Diagnostic Specimen Simulation Pod */}
          <div className="w-full max-w-md bg-surface-container-lowest text-on-surface rounded-2xl p-space-md sm:p-space-lg shadow-lg flex flex-col gap-space-md">
            <div className="flex items-center justify-between pb-space-xs border-b border-surface-container">
              <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">
                Live Telemetry Simulation
              </span>
              <span className="inline-flex items-center gap-1 font-code-mono text-body-sm text-secondary">
                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                SAMPLE
              </span>
            </div>
            <div className="rounded-xl bg-surface-container-high h-48 overflow-hidden relative flex items-center justify-center">
              <img
                src={images.homeTelemetryLeaf}
                className="w-full h-full object-cover"
                alt="Clean diagnostic camera frame of a healthy pepper capsicum annuum leaf against light neutral background ready for artificial intelligence spectral analysis"
              />
              <div className="absolute inset-0 bg-secondary/10 flex items-center justify-center">
                <div className="px-3 py-1.5 rounded-lg bg-surface-container-lowest/90 backdrop-blur-sm text-primary font-label-sm text-label-sm shadow flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px] text-secondary">crop_free</span>
                  <span>Foliar Lamina Centered</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center text-body-sm font-label-sm">
                <span className="text-on-surface-variant">Diagnostic Certainty</span>
                <span className="font-bold text-secondary">99.4% (sample)</span>
              </div>
              <div className="w-full bg-surface-container rounded-full h-2 overflow-hidden">
                <div className="bg-secondary h-full rounded-full w-[99.4%]"></div>
              </div>
            </div>
            <div className="p-space-sm rounded-lg bg-surface-container-low flex items-center justify-between font-code-mono text-body-sm">
              <span className="text-on-surface-variant">Class: Lycopersicum</span>
              <span className="text-primary font-semibold">Status: Clean</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
