import React from "react";
import "./Button.css";

function Button(props) {
  console.log(props);
  return (
    <button
      style={{
        backgroundColor: props.backgroundColor,
        color: props.textColor,
      }}
      className="button"
    >
        {props.text}
    </button>
  );
}

export default Button;
