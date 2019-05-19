import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import styles from "./Button.module.scss";

function Button({ className, children, disabled, type }) {
  return (
    <button
      type="button"
      disabled={disabled}
      className={classNames(className, {
        [styles.button]: true,
        [styles[`button-${type}`]]: type
      })}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  type: "",
  disabled: false,
};

export default Button;
