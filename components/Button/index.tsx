import React from "react";
import classNames from "classnames";

interface Props {
  type?: string,
  disabled?: boolean,
  color?: string,
  className?: string,
  children?: any,
  onClick?: (event: any) => void,
  props?: React.Attributes,
}

function Button({ className, children, disabled, type, color, onClick, props }: Props) {
 
  return (
    <button
      type="button"
      disabled={disabled}
      className={classNames(className, {
        button: true,
        [`button-${type}`]: type,
        [`button-${color}`]: color,
      })}
      {...props}
      onClick={onClick}
    >
      {children}
      <style jsx>{`
        .button {
          display: inline-block;
          padding: 0 16px;
          font-size: 14px;
          line-height: 32px;
          color: #8590a6;
          text-align: center;
          cursor: pointer;
          background: none;
          border: 1px solid;
          border-radius: 3px;
        }

        .button-primary.button-blue {
          color: #fff;
          background-color: #0084ff;
        }

        .button-blue {
          color: #0084ff;
          border-color: #0084ff;
        }
   
        .searchButton {
          margin-left: 12px;
          padding: 0 12px;
          background: transparent;
          border-color: transparent;
          border-bottom-left-radius: 0;
          border-top-left-radius: 0;
        }

        .buttonPlain {
          height: auto;
          padding: 0;
          line-height: inherit;
          background-color: transparent;
          border: none;
          border-radius: 0;
        }
     `}</style>
    </button>
  );
}

Button.defaultProps = {
  type: "",
  disabled: false,
  color: '',
};

export default Button;
