import FeedbackCard from "./FeedbackCard";

const FeedbackList = ({ data }) => {
  return (
    <div className="mt-4">
      {data.map((item) => (
        <FeedbackCard key={item._id} data={item} />
      ))}
    </div>
  );
};

export default FeedbackList;
