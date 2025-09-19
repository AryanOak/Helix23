import { useState } from "react";

export default function Drug() {
  const [file, setFile] = useState(null);
  const [notes, setNotes] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!file || !notes.trim()) {
      alert("Please upload a file and enter notes!");
      return;
    }
    alert("Drug Response submitted successfully!");
    setFile(null);
    setNotes("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0e0026] text-white">
      <form
        onSubmit={handleSubmit}
        className="glass p-8 rounded-lg shadow-lg w-full max-w-lg"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">💊 Drug Response</h2>

        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          className="w-full mb-6 text-white bg-[#24004d] p-2 rounded"
        />

        <textarea
          placeholder="Paste Data"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          rows={6}
          className="w-full mb-6 rounded bg-[#24004d] p-3 text-white resize-none focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

        <button className="w-full bg-purple-600 py-3 rounded hover:bg-purple-700 transition">
          Submit
        </button>
      </form>
    </div>
  );
}
