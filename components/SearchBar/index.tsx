import React, { useState } from "react";
import Search from "../Search";
import Button from "../Button";
import classNames from 'classnames';
import styles from './SearchBar.module.css'

interface Props {
  onSearch?: (event?: any) => void,
  onFucus?: (event?: string) => void,
  onChange?: (value: string) => void,
  onQuestion?: (value: string) => void,
  placeholder?: string,
}

function SearchBar({ onSearch, onChange, onFucus, onQuestion, placeholder }: Props) {
  const [focus, setFocus] = useState(false);

  const handleFocus = () => {
    if (typeof onChange === 'function') onFucus()
    setFocus(true);
  };

  const handleBlur = () => {
    setFocus(false);
  };

  const handleChange = (event) => {
    if (typeof onChange === 'function') onChange(event.target.value)
  }

  return (
    <div className={styles.SearchBar}>
      <div className={styles.SearchBarToolWrapper}>
        <form className={styles.searchBarTool}>
          <Search
            placeholder={placeholder}
            focus={focus}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
            onSearch={onSearch}
          />
        </form>
      </div>
      <Button
        type="primary"
        color="blue"
        onClick={onQuestion}
        className={classNames({
          [styles.askButton]: true,
          [styles.askHiddenButton]: focus
        })}
      >
        提问
      </Button>
      <style jsx>{`
       
      `}
      </style>
    </div>
  );
}

export default SearchBar;
