import React, { useState } from "react";
import Search from "../Search";
import Button from "../Button";
import classNames from 'classnames';

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
    <div className="SearchBar">
      <div className="SearchBarToolWrapper">
        <form className="searchBarTool">
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
          askButton: true,
          askHiddenButton: focus
        })}
      >
        提问
      </Button>
      <style jsx>{`
        .SearchBar {
          display: flex;
        }
        .SearchBarToolWrapper {
          position: relative;
          z-index: 104;
          width: 326px;
        }
        
        .SearchBarTool {
          position: relative;
          float: left;
          overflow: hidden;
        }
      `}
      </style>
    </div>
  );
}

export default SearchBar;
