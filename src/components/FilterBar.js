import { useState } from "react";

const FilterBar = () => {
  const filters = [
    { tag: "read", name: "Read" },
    { tag: "unread", name: "Unread" },
    { tag: "fav", name: "Favorites" }
  ];
  const [filterBy, setFilterBy] = useState("read");
  return (
    <div className="filter-bar">
      <p>Filter by :</p>
      {filters.map((filter) => (
        <button
          className={filterBy === filter.tag ? "active" : ""}
          onClick={() => setFilterBy(filter.tag)}
        >
          {filter.name}
        </button>
      ))}
    </div>
  );
};
export default FilterBar;
