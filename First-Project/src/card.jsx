import React from "react";
import "./Card.css"; // optional, if you want to style it separately

// You can pass props like:
// <Card title="My Card" description="This is a simple card" image="/path.jpg" />

const Card = ({ title, description, image, children, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      {image && <img src={image} alt={title} className="card-image" />}
      <div className="card-content">
        {title && <h3 className="card-title">{title}</h3>}
        {description && <p className="card-description">{description}</p>}
        {children && <div className="card-children">{children}</div>}
      </div>
    </div>
  );
};

export default Card;
