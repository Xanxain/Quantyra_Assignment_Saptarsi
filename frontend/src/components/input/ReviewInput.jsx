import { useState } from "react";

const ReviewInput = ({ onSubmit }) => {
  const [text, setText] = useState("");

  const handleSubmit = () => {
    if (!text.trim()) return;
    onSubmit(text);
    setText("");
  };

  return (
    <div>
      <textarea
        className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        placeholder="Write your restaurant review..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={4}
      />

      <button
        className="mt-4 w-full bg-blue-500 text-white py-2 rounded-xl font-medium hover:bg-blue-600 transition"
        onClick={handleSubmit}
      >
        Submit Review
      </button>
    </div>
  );
};

export default ReviewInput;
