import { useState } from "react";

export default function Risk() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!file) {
      alert("Please upload a file first!");
      return;
    }

    // Random risk outcome
    const outcomes = [
      { label: "Low🍀", color: "text-green-400" },
      { label: "Moderate⚖️", color: "text-yellow-400" },
      { label: "High☠️", color: "text-red-400" },
    ];
    const chosen = outcomes[Math.floor(Math.random() * outcomes.length)];

    setResult({
      classification: chosen,
      description:
        "This is a placeholder explanation about genetic predisposition. (Will be replaced with model output).",
      confidence: `${(65 + Math.random() * 30).toFixed(2)}%`, // random 65–95%
      why: "Genetic factors and risk markers contribute to this classification. (Placeholder explanation)",
    });

    setFile(null);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0e0026] text-white px-4">
      <div className="glass p-8 rounded-lg shadow-lg w-full max-w-xl">
        <h2 className="text-2xl font-bold mb-6 text-center">
          🧬 Risk Stratification
        </h2>

        {/* Show form if no result */}
        {!result && (
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
              className="w-full text-white bg-[#24004d] p-2 rounded"
            />

            <button className="w-full bg-purple-600 py-3 rounded hover:bg-purple-700 transition">
              Submit
            </button>
          </form>
        )}

        {/* Show results if available */}
        {result && (
          <div className="space-y-6">
            <p
              className={`text-xl font-bold text-center ${result.classification.color}`}
            >
              Risk Level is: {result.classification.label}
            </p>

            <p className="text-gp_muted text-center">{result.description}</p>

            <div className="bg-[#24004d] p-4 rounded border border-white/10">
              <p className="font-semibold">
                Confidence Score:{" "}
                <span className="text-white">{result.confidence}</span>
              </p>
            </div>

            <div className="bg-[#24004d] p-4 rounded border border-white/10">
              <p className="font-semibold">Why?</p>
              <p className="text-gp_muted mt-2">{result.why}</p>
            </div>

            <button
              onClick={() => setResult(null)}
              className="w-full bg-purple-500 py-2 rounded hover:bg-purple-600 transition"
            >
              Analyze Again
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
