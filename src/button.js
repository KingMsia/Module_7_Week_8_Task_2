import React from "react";

const Button = ({ label, onClick, style }) => {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "10px 20px",
        color: "white",
        backgroundColor: "skyblue",
        border: "2px solid black",
        borderRadius: "5px",
        cursor: "pointer",
        ...style,
      }}
    >
      {label}
    </button>
  );
};

export default Button;
