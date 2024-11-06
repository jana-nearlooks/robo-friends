import React from "react";

const Input = (props) => {
  return (
    <div>
      <label>{props.name}</label>
      <input
        type={props.type}
        className={props.className}
        onChange={props.onChange}
        value={props.value}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default Input;
