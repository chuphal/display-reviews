import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";
import { MdOutlinePersonAddAlt } from "react-icons/md";
import ReviewHighlighter from "./ReviewHighlighter";
import { Rating } from "react-simple-star-rating";

const Review = ({ review }) => {
  let sentencesArray = [];

  if (review.sentences) {
    sentencesArray = review.analytics[0]["sentences"];
  }
  // console.log(sentencesArray);
  return (
    <div className="review-card">
      <div className="review-header">
        <div className="review-logo-email">
          <div className="review-avatar">
            <img
              src={review.source.icon}
              alt={review.source.name.split(".")[0] + "-logo"}
              className="review-logo"
            />
          </div>
          <div className="review-user-info">
            <p className="review-user-site-info">
              <span className="review-username">{review.reviewer_name} </span>
              <span>
                wrote a review at{" "}
                <a
                  href={review.review_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {review.source.name}
                </a>
              </span>
            </p>
            <div className="review-rating">
              <Rating
                initialValue={review.rating_review_score / 2}
                disableFillHover={true}
                readonly={true}
                size={30}
              />
              <span className="review-date">{review.date}</span>
            </div>
          </div>
        </div>
        <div className="review-utilities">
          <MdOutlinePersonAddAlt style={{ fontSize: "20px" }} />
          {review.bookmarked ? (
            <FaBookmark style={{ margin: "0px 6px", fontSize: "15px" }} />
          ) : (
            <FaRegBookmark style={{ margin: "0px 6px", fontSize: "15px" }} />
          )}

          <BsThreeDots />
        </div>
      </div>
      <div className="review-body">
        <ReviewHighlighter
          content={review.content}
          sentiment={review.sentiment}
          sentences={sentencesArray}
          topic={review.topic}
        />
      </div>
    </div>
  );
};

export default Review;
