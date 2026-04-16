import { useEffect, useState } from "react";
import ReviewInput from "../components/input/ReviewInput";
import FeedbackList from "../components/feedback/FeedbackList";
import FilterBar from "../components/filters/FilterBar";
import { submitFeedback, getInsights } from "../services/api";

const Home = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("ALL");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await getInsights();
      setData(res.reverse()); // latest first
    } catch (err) {
      console.error(err);
    }
  };

  const handleNewReview = async (text) => {
    try {
      setLoading(true);

      const newItem = await submitFeedback(text);

      setData((prev) => [newItem, ...prev]);

    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const filteredData =
    filter === "URGENT"
      ? data.filter((item) => item.requiresAction)
      : data;

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-orange-100 p-6">
      <div className="max-w-3xl mx-auto">

        <h1 className="text-4xl font-bold text-center mb-6">
          🍽️ AI Feedback Analyzer
        </h1>

        <div className="bg-white p-6 rounded-2xl shadow mb-6">
          <ReviewInput onSubmit={handleNewReview} />
        </div>

        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Insights</h2>
          <FilterBar filter={filter} setFilter={setFilter} />
        </div>

        {loading && (
          <p className="text-center text-gray-500 mb-4">
            Processing review...
          </p>
        )}

        <FeedbackList data={filteredData} />

      </div>
    </div>
  );
};

export default Home;
