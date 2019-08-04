import React, { useState } from "react";
import Search from "components/Search";
import Button from "components/Button";
import styles from "./SearchBar.module.scss";

function SearchBar({ onSearch, placeholder }) {
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
        className={{
          [styles.askButton]: true,
          [styles.askHiddenButton]: focus
        }}
      >
        提问
      </Button>
    </div>
  );
}

export default SearchBar;
