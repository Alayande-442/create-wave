import { useState } from "react";
import PromptForm from "@/components/PromptForm";

export default function Home() {
  const [result, setResult] = useState("");

  const handleGenerate = async (prompt: string, tone: string) => {
    setResult("Generating...");

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt, tone }),
      });

      const data = await res.json();
      setResult(data.result);
    } catch (err) {
      console.error(err);
      setResult("Something went wrong.");
    }
  };

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Multimodal Generator</h1>
        <PromptForm onSubmit={handleGenerate} />
        {result && (
          <div className="mt-6 p-4 bg-green-100 rounded shadow">{result}</div>
        )}
      </div>
    </main>
  );
}
