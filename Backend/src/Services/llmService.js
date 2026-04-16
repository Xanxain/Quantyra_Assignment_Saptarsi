import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const client = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: "https://api.groq.com/openai/v1",
});

export async function callLLM(review) {
  try {
    const prompt = `
Analyze this restaurant review and return ONLY JSON:

{
  "sentiment": "Positive | Neutral | Negative",
  "keyItems": ["..."],
  "requiresAction": true/false
}

Rules:
- sentiment must be exactly one of Positive, Neutral, Negative
- keyItems must ONLY include restaurant-related items such as:
  food (pizza, burger, pasta, etc.), service, staff, ambience, cleanliness, waiting time
- requiresAction = true ONLY if:
  - food poisoning
  - extremely rude behavior
  - very bad experience

Review: ${review}
`;

    const response = await client.chat.completions.create({
      model: "llama-3.3-70b-versatile", // fast + free
      messages: [{ role: "user", content: prompt }],
    });

    const raw = response.choices[0].message.content;

    const jsonMatch = raw.match(/\{[\s\S]*\}/);

    return jsonMatch ? jsonMatch[0] : raw;
  } catch (error) {
    console.error("LLM Error:", error.message);

    return JSON.stringify({
      sentiment: "Neutral",
      keyItems: [],
      requiresAction: false,
    });
  }
}
