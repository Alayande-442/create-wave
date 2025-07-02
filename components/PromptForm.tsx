import { useState } from "react";

type Props = {
  onSubmit: (prompt: string, tone: string) => void;
};

export default function PromptForm({ onSubmit }: Props) {
  const [prompt, setPrompt] = useState("");
  const [tone, setTone] = useState("Playful");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(prompt, tone);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 bg-white p-4 rounded-2xl shadow"
    >
      <div>
        <label className="block font-semibold mb-1">Product / Idea</label>
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="w-full border p-2 rounded"
          placeholder="e.g. A smart water bottle that tracks hydration"
          required
        />
      </div>
      <div>
        <label className="block font-semibold mb-1">Tone</label>
        <select
          value={tone}
          onChange={(e) => setTone(e.target.value)}
          className="w-full border p-2 rounded"
        >
          <option>Playful</option>
          <option>Serious</option>
          <option>Bold</option>
        </select>
      </div>
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Generate
      </button>
    </form>
  );
}
