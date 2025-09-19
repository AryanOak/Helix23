import { Suspense } from "react";
import { Link } from "react-router-dom";
import DNA from "./DNA";

export default function Hero() {
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
          {/* ✅ Start Analysis button goes to /genedata */}
        <Link
          to="/genedata"
          className="btn-primary px-8 py-3 bg-purple-600 rounded-lg text-lg font-medium hover:bg-purple-700 transition"
        >
          Start Your Analysis
        </Link>
                    <button className="btn-ghost">Learn more</button>
              </div>

              <div className="mt-8 rounded-xl2 bg-gp_panel/60 p-5 border border-white/5">
                <p className="text-xl font-semibold">Unlock Insights into Your Health</p>
                <p className="text-gp_muted mt-2">
                  Gain a deeper understanding of your genetic predispositions and
                  health risks.
                </p>
              </div>
            </div>
              
            {/* DNA canvas */}
                <div className="h-[380px] md:h-[480px] lg:h-[520px] relative">
                {/* REMOVE this overlay div */}
                {/* <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-gp_panel via-transparent to-transparent"></div> */}
                <Suspense fallback={<div className="w-full h-full rounded-3xl bg-gp_panelSoft" />}>
            <DNA />
                </Suspense>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
