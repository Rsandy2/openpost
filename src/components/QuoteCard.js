import React from "react";
import "./QuoteCard.scss";
export default function QuoteCard({ Title, Image, Message }) {
  return (
    <div className="post__container">
      <div className="post__header">
        <p>{Title}</p>
      </div>
      {/* Image */}
      <img className="post__image" src={Image} />
      {/* Description*/}
      <div className="post__text">
        <p>{Message}</p>
      </div>
    </div>
  );
}
