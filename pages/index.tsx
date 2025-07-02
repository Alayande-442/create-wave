import { useState } from "react";
import PromptForm from "@/components/PromptForm";

export default function Home() {
  const [result, setResult] = useState("");

  const handleGenerate = (prompt: string, tone: string) => {
    console.log("Prompt:", prompt, "Tone:", tone);
    // we will hook up the GPT call here next
    setResult(`Generated content for "${prompt}" in tone "${tone}"`);
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
