import React from "react";
import ReviewCard from "../molecules/ReviewCard";
import { Review } from "../utils/Reviews";
const Reviews = () => {
  const reviews = Review;
  return (
    <div>
      <div>
        {reviews.map((review, index) => (
          <ReviewCard
            key={index}
            numberOfStars={review.numberOfStars}
            reviewer={review.reviewer}
            review={review.review}
          />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
