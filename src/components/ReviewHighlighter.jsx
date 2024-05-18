import React from "react";
import Tippy from "@tippyjs/react";
import { followCursor } from "tippy.js";

const ReviewHighlighter = ({ topic, content, sentences, sentiment }) => {
  let color = "";

  if (sentiment === "Negative") {
    color = "#F2DBD9";
  } else if (sentiment === "Positive") {
    color = "#D9F2DD";
  } else if (sentiment === "Neutral") {
    color = "#eaf09b6b";
  } else {
    color = "#e8bd6d3d";
  }

  let parts = [];
  parts.push(content);
  if (sentences.length !== 0) {
    const regex = new RegExp(`(${sentences.join("|")})`, "gi");
    parts = content.split(regex);
  } else {
    sentences = ["abcdefghi"];
  }

  // console.log(parts);
  return (
    <p>
      {parts.map((part, index) => {
        if (sentences.length === 0) {
          {
            return part;
          }
        } else {
          for (let i = 0; i < sentences.length; i++) {
            if (part.toLowerCase() === sentences[i].toLowerCase()) {
              return (
                <Tippy
                  content={topic}
                  followCursor={true}
                  plugins={[followCursor]}
                  className="tippsyTool"
                  key={i}
                >
                  <span key={index} style={{ backgroundColor: color }}>
                    {part}
                  </span>
                </Tippy>
              );
              break;
            } else {
              if (i === sentences.length - 1) {
                {
                  return part;
                }
              }
            }
          }
        }
      })}
    </p>
  );
};

export default ReviewHighlighter;
