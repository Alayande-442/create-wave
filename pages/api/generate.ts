import type { NextApiRequest, NextApiResponse } from "next";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY,
  baseURL: "https://openrouter.ai/api/v1", // OpenRouter endpoint
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Only POST allowed" });
  }

  const { prompt, tone } = req.body;

  try {
    const completion = await openai.chat.completions.create({
      model: "mistralai/mixtral-8x7b-instruct", // a strong free model on OpenRouter
      messages: [
        {
          role: "system",
          content:
            "You are a creative marketing assistant. Given a product and a tone, write a short marketing headline and caption.",
        },
        {
          role: "user",
          content: `Product: ${prompt}\nTone: ${tone}\n\nPlease return a short headline and a short caption.`,
        },
      ],
    });

    const answer = completion.choices[0].message?.content;
    res.status(200).json({ result: answer });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Something went wrong." });
  }
}
