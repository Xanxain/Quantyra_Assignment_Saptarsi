import Feedback from "../models/feedback.model.js";
import { callLLM } from "../services/llmService.js";
import { validateLLM } from "../services/validator.js";

export const createFeedback = async (req, res) => {
  try {
    const { text } = req.body;

    if (!text) {
      return res.status(400).json({ error: "Text is required" });
    }

    const llmOutput = await callLLM(text);

    if (!validateLLM(llmOutput)) {
      return res
        .status(400)
        .json({ error: "LLM returned invalid structured response" });
    }

    const parsed = JSON.parse(llmOutput);

    const saved = await Feedback.create({
      rawText: text,
      sentiment: parsed.sentiment,
      keyItems: parsed.keyItems,
      requiresAction: parsed.requiresAction,
    });

    res.status(201).json(saved);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getInsights = async (req, res) => {
  try {
    const data = await Feedback.find().sort({ createdAt: -1 });
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
