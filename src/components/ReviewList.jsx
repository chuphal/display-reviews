import React from "react";
import jsonData from "../assets/reviews_data.json";
import Review from "./Review";

const ReviewList = () => {
  const reviewList = [...jsonData];

  // fetch("/reviews_data.json", {
  //   method: "GET",
  // })
  //   .then((res) => res.json())
  //   .then((data) => {
  //     data.map((item) => reviewList.push(item));
  //   });

  // console.log(reviewList);
  return (
    <div>
      {reviewList.map((review, idx) => {
        return <Review key={idx} review={review} />;
      })}
    </div>
  );
};

export default ReviewList;
