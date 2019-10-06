import React from "react";

function Input(props) {
  return (
    <>
    <input
      className="input"
      type="text"
      maxLength="100"
      autoComplete="off"
      {...props}
    />
    <style jsx>{`
      input.input {
        color: #1a1a1a;
        height: 24px;
        line-height: 24px;

      }

      input.input:focus {
        outline: none;
      }
    `}
    </style>
    </>
  );
}

export default Input;
