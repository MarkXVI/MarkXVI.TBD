import React from 'react';
import "../../../stylesheets/card.stylesheet.css"

function Card({ title, content, img }) {
  return (
    <div className="card">
      <div className="card-front">
        <img src={img} alt="card-img" />
      </div>
      <div className="card-back">
        <div className="card-header">
          <h3>{title}</h3>
        </div>
        <div className="card-content">
          {content}
        </div>
      </div>
    </div>
  );
}

export default Card;