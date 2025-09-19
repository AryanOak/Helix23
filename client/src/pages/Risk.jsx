import { useState } from "react";

export default function Risk() {
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!file) {
      alert("Please upload a file first!");
      return;
    }
    alert("Risk Stratification file uploaded successfully!");
    setFile(null);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0e0026] text-white">
      <form
        onSubmit={handleSubmit}
        className="glass p-8 rounded-lg shadow-lg w-full max-w-lg"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">
          🧬 Risk Stratification
        </h2>

        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          className="w-full mb-6 text-white bg-[#24004d] p-2 rounded"
        />

        <button className="w-full bg-purple-600 py-3 rounded hover:bg-purple-700 transition">
          Submit
        </button>
      </form>
    </div>
  );
}
