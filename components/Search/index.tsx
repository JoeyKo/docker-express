import React from "react";
import classNames from "classnames";
import Input from "../Input";
import Button from "../Button";

interface Props {
  onFocus?: () => void,
  onBlur?: () => void,
  className?: string,
  focus?: boolean,
  onSearch?: (event: any) => void,
  onChange?: (event: any) => void,
  placeholder?: string,
}
function Search({
  onFocus,
  onBlur,
  className,
  focus,
  onSearch,
  onChange,
  placeholder
}: Props) {
  return (
    <div
      className={classNames(className, {
        inputWrapper: true,
        searchBarInput: true,
        inputWrapperGrey: true,
        isFocus: focus,
        focusedInput: focus
      })}
    >
      <Input
        onFocus={onFocus}
        onBlur={onBlur}
        placeholder={placeholder}
        onChange={onChange}
      />
      <div className="inputAfter">
        <Button type="primary" className="searchIcon" onClick={onSearch}>
          <span style={{ display: "inline-flex", alignItems: "center" }}>
            &#8203;
            <svg fill="currentColor" viewBox="0 0 24 24" width="18" height="18">
              <path
                d="M17.068 15.58a8.377 8.377 0 0 0 1.774-5.159 8.421 8.421 0 1 0-8.42 8.421 8.38 8.38 0 0 0 5.158-1.774l3.879 3.88c.957.573 2.131-.464 1.488-1.49l-3.879-3.878zm-6.647 1.157a6.323 6.323 0 0 1-6.316-6.316 6.323 6.323 0 0 1 6.316-6.316 6.323 6.323 0 0 1 6.316 6.316 6.323 6.323 0 0 1-6.316 6.316z"
                fillRule="evenodd"
              />
            </svg>
          </span>
        </Button>
      </div>
      <style jsx>{`
        .inputWrapper {
          position: relative;
          display: flex;
          width: 180px;
          height: 34px;
          padding: 4px 10px;
          font-size: 14px;
          background: #fff;
          border: 1px solid #ebebeb;
          border-radius: 3px;
          box-sizing: border-box;
          transition: background 0.2s, border 0.2s;
        }

        .inputWrapper.isFocus {
          background: #fff;
          border: 1px solid #8590a6;
        }
        
        .searchBarInput {
          width: 326px;
          padding-left: 16px;
          transition: width 0.2s ease, background 0.3s ease;
        }
        
        .searchBarInput.focusedInput {
          width: 400px;
        }
        
        .inputWrapperGrey {
          background: #f6f6f6;
        }
        
        .inputAfter {
          position: absolute;
          top: 50%;
          right: 10px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          margin: auto;
          transform: translate3d(0,-50%,0);
        }
        
        .searchIcon {
          position: absolute;
          right: -11px;
          top: -17px;
          bottom: -17px;
          background: transparent;
          border: transparent;
          padding: 0 12px;
          border-bottom-left-radius: 0;
          border-top-left-radius: 0;
          transition: fill .3s ease;
        }
      `}

      </style>
    </div>
  );
}

export default Search;
