import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema(
  {
    rawText: String,
    sentiment: String,
    keyItems: [String],
    requiresAction: Boolean,
  },
  { timestamps: true },
);

export default mongoose.model("Feedback", feedbackSchema);
