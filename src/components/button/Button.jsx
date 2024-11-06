import React from "react";

const Button = (props) => {
  return (
    <div>
      <button
        type={props.type}
        onClick={props.onClick}
        className={props.className}
      >
        {props.name}
      </button>
    </div>
  );
};

export default Button;
