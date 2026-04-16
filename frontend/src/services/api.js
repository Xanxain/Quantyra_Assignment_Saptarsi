const BASE_URL = "https://quantyra-assignment-saptarsi.onrender.com";

export const submitFeedback = async (text) => {
  const res = await fetch(`${BASE_URL}/api/feedback`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text }),
  });

  if (!res.ok) throw new Error("Submit failed");

  return res.json();
};

export const getInsights = async () => {
  const res = await fetch(`${BASE_URL}/api/insights`);

  if (!res.ok) throw new Error("Fetch failed");

  return res.json();
};
