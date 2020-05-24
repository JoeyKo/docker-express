import React, { useState } from "react";
import Search from "../Search";
import Button from "../Button";
import classNames from 'classnames';
import styles from './SearchBar.module.css'

interface Props {
  onSearch?: (event: any) => void,
  placeholder?: string,
}

function SearchBar({ onSearch, placeholder }: Props) {
  const [focus, setFocus] = useState(false);

  const handleFocus = () => {
    setFocus(true);
  };

  const handleBlur = () => {
    setFocus(false);
  };

  const handleChange = (event) => {
    console.log(event.target.value)
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
