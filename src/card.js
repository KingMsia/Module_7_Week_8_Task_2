import React from "react";

const Card = ({ content, style }) => {
  return (
    <div
      style={{
        backgroundColor: "beige",
        border: "1px solid black",
        borderRadius: "5px",
        padding: "20px",
        maxWidth: "400px",
        margin: "5px",
        ...style,
      }}
    >
      <p>{content}</p>
    </div>
  );
};

export default Card;
