import { Suspense, useState } from "react";
import { Link } from "react-router-dom";
import DNA from "./DNA";

export default function Hero() {
  const [showOptions, setShowOptions] = useState(false);

  return (
    <section className="relative overflow-hidden">
      <div className="hero-dots" aria-hidden="true"></div>
      <div className="max-w-6xl mx-auto px-6 md:px-8 pt-16 pb-14 md:pt-24 md:pb-20">
        <div className="glass rounded-3xl p-8 md:p-12 relative">
          {/* content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="relative z-10">
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                Personalized Genomic <br />
                Risk Assessment
              </h1>
              <p className="mt-5 text-lg text-gp_muted max-w-xl">
                Advanced AI-powered analysis of your DNA for disease risk and
                drug response prediction.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                {/* ✅ Toggle overlay card */}
                <button
                  onClick={() => setShowOptions(!showOptions)}
                  className="btn-primary px-8 py-3 bg-purple-600 rounded-lg text-lg font-medium hover:bg-purple-700 transition"
                >
                  Start Your Analysis
                </button>
                <button className="btn-ghost">Learn more</button>
              </div>

              <div className="mt-8 rounded-xl2 bg-gp_panel/60 p-5 border border-white/5">
                <p className="text-xl font-semibold">
                  Unlock Insights into Your Health
                </p>
                <p className="text-gp_muted mt-2">
                  Gain a deeper understanding of your genetic predispositions and
                  health risks.
                </p>
              </div>
            </div>

            {/* DNA canvas */}
            <div className="h-[380px] md:h-[480px] lg:h-[520px] relative">
              <Suspense
                fallback={
                  <div className="w-full h-full rounded-3xl bg-gp_panelSoft" />
                }
              >
                <DNA />
              </Suspense>
            </div>
          </div>
        </div>

        {/* ✅ Overlay card for analysis options */}
        {showOptions && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-20">
            <div className="glass p-8 rounded-xl w-80 text-center relative">
              <button
                onClick={() => setShowOptions(false)}
                className="absolute top-2 right-2 text-gray-300 hover:text-white"
              >
                ✕
              </button>
              <h3 className="text-xl font-semibold mb-6">Choose Analysis Type</h3>
              <div className="flex flex-col gap-4">
                <Link
                  to="/risk"
                  className="btn-primary bg-purple-600 py-3 rounded hover:bg-purple-700 transition"
                >
                  🧬 Risk Stratification
                </Link>
                <Link
                  to="/drug"
                  className="btn-primary bg-purple-500 py-3 rounded hover:bg-purple-600 transition"
                >
                  💊 Drug Response
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
