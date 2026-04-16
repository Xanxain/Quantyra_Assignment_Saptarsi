export function validateLLM(output) {
  try {
    const data = JSON.parse(output);

    return (
      ["Positive", "Neutral", "Negative"].includes(data.sentiment) &&
      Array.isArray(data.keyItems) &&
      typeof data.requiresAction === "boolean"
    );
  } catch {
    return false;
  }
}