const FilterBar = ({ filter, setFilter }) => {
  return (
    <div className="flex gap-2">
      <button
        className={`px-4 py-1 rounded-full text-sm font-medium transition ${
          filter === "ALL"
            ? "bg-blue-500 text-white"
            : "bg-gray-200 text-gray-700"
        }`}
        onClick={() => setFilter("ALL")}
      >
        All
      </button>

      <button
        className={`px-4 py-1 rounded-full text-sm font-medium transition ${
          filter === "URGENT"
            ? "bg-red-500 text-white"
            : "bg-gray-200 text-gray-700"
        }`}
        onClick={() => setFilter("URGENT")}
      >
        Urgent
      </button>
    </div>
  );
};

export default FilterBar;
