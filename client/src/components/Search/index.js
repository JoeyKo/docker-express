import React, { useState } from "react";
import classNames from "classnames";
import Input from "components/Input";
import SearchButton from './SearchButton'
import styles from "./Search.module.scss";

function Search(props) {
  const [focus, setFocus] = useState(false)

  console.log(focus)
  return (
    <div
      {...props}
      className={classNames(
        {
          [styles.inputWrapper]: true,
          [styles.searchBarInput]: true,
          [styles.inputWrapperGrey]: true,
          [styles.isFocus]: focus,
          [styles.focusedInput]: focus
        }
      )}
    >
      <Input 
        onFocus={() => setFocus(true)} 
        onBlur={() => setFocus(false)} 
        placeholder="iG 不敌TL 无缘 MSI 决赛" 
      />
      <div className={styles.inputAfter}>
        <SearchButton />
      </div>
    </div>
  );
}

export default Search;
