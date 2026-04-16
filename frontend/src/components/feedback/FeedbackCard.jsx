import SentimentBadge from "./SentimentBadge";

const FeedbackCard = ({ data }) => {
  return (
<div
  className={`p-5 rounded-2xl mb-4 transition transform hover:-translate-y-1 hover:scale-[1.02] hover:shadow-2xl ${
    data.requiresAction
      ? "border-l-4 border-red-500 bg-red-50"
      : "bg-white shadow-md"
  }`}
>

      <p className="text-gray-800 mb-3 leading-relaxed">
        {data.rawText}
      </p>

      <div className="flex justify-between items-center">
        <div>
          <p className="text-sm text-gray-500">Sentiment</p>
          <SentimentBadge sentiment={data.sentiment} />
        </div>

        <p className="text-xs text-gray-400">
          {new Date(data.createdAt).toLocaleDateString()}
        </p>

      </div>

      <div className="mt-4">
        <p className="text-sm text-gray-500 mb-1">Key Items</p>
        <div className="flex gap-2 flex-wrap">
          {data.keyItems.map((item, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-gray-100 text-sm rounded-full"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {data.requiresAction && (
        <div className="mt-4 text-sm font-semibold text-red-600">
          🚨 Immediate Attention Needed
        </div>
      )}
    </div>
  );
};

export default FeedbackCard;
