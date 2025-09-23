import { useState } from "react";

export default function Drug() {
  const [file, setFile] = useState(null);
  const [notes, setNotes] = useState("");
  const [result, setResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!file || !notes.trim()) {
      alert("Please upload a file and enter notes!");
      return;
    }

    // Random classification
    const outcomes = [
      { label: "Effective✅", color: "text-green-400" },
      { label: "Resistant⚠️", color: "text-yellow-400" },
      { label: "Toxic❌", color: "text-red-400" },
    ];
    const chosen = outcomes[Math.floor(Math.random() * outcomes.length)];

    // Set dummy result
    setResult({
      classification: chosen,
      description:
        "This is a placeholder explanation about how the DNA may influence the drug response.",
      confidence: `${(70 + Math.random() * 25).toFixed(2)}%`, // random 70–95
      why: "The response is affected by genetic variations in drug metabolism pathways. (Placeholder)",
    });

    // Reset inputs
    setFile(null);
    setNotes("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0e0026] text-white px-4">
      <div className="glass p-8 rounded-lg shadow-lg w-full max-w-xl">
        <h2 className="text-2xl font-bold mb-6 text-center">💊 Drug Response</h2>

        {/* If no result, show form */}
        {!result && (
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
              className="w-full text-white bg-[#24004d] p-2 rounded"
            />

            <textarea
              placeholder="Paste Your Data"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={6}
              className="w-full rounded bg-[#24004d] p-3 text-white resize-none focus:outline-none focus:ring-2 focus:ring-purple-500"
            />

            <button className="w-full bg-purple-600 py-3 rounded hover:bg-purple-700 transition">
              Submit
            </button>
          </form>
        )}

        {/* If result exists, show analysis output */}
        {result && (
          <div className="space-y-6">
            <p
              className={`text-xl font-bold text-center ${result.classification.color}`}
            >
              The Drug is: {result.classification.label}
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
