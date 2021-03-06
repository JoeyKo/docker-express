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
      
      input.input {
        flex: 1 1;
        padding: 0;
        overflow: hidden;
        background: transparent;
        border: none;
        resize: none;
      }
    `}
    </style>
    </>
  );
}

export default Input;
