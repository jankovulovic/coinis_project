import React, { useState } from "react";
import classes from "./RatingFilter.module.css";
import StarIcon from "@mui/icons-material/Star";

function RatingFilter() {
  const [rating, setRating] = useState(0);
  const [sortOrder, setSortOrder] = useState("desc");

  const handleRatingFilter = (selectedRating) => {
    setRating(selectedRating);
  };

  const handleSortOrderChange = () => {
    const newSortOrder = sortOrder === "desc" ? "asc" : "desc";
    setSortOrder(newSortOrder);
  };

  const ratings = [
    { value: 1, label: "1 ", minRating: 1, maxRating: 1.9 },
    { value: 2, label: "2 ", minRating: 2, maxRating: 2.9 },
    { value: 3, label: "3 ", minRating: 3, maxRating: 3.9 },
    { value: 4, label: "4 ", minRating: 4, maxRating: 4.9 },
    { value: 5, label: "5 ", minRating: 5, maxRating: 5 },
  ];

  return (
    <div>
      <div>
        <div>Filter by Rating:</div>
        <div className={classes.starFlex}>
          {ratings.map((item) => (
            <button
              key={item.value}
              className={`${classes.ratingButton} ${
                item.minRating <= rating && rating <= item.maxRating
                  ? classes.active
                  : ""
              }`}
              onClick={() => handleRatingFilter(item.value)}
            >
              {item.label} <StarIcon className={classes.starIcon} />
            </button>
          ))}
        </div>
      </div>

      <div>
        <div>Sort Order:</div>
        <button onClick={handleSortOrderChange}>
          {sortOrder === "desc" ? "Highest to Lowest" : "Lowest to Highest"}
        </button>
      </div>

      {/* Place the code to display the filtered and sorted results here */}
    </div>
  );
}

export default RatingFilter;
