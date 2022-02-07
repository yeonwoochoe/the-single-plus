import React from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import classes from "./SearchBox.module.scss";
const SearchBox = () => {
  return (
    <article id={classes.searchBox}>
      <h2 className="blind"> searchBox</h2>
      <h3>일상에 즐거움을 더하는 이야기를 찾아보세요.</h3>
      <form>
        <legend className="blind">search</legend>
        <span className={classes["sch-inner-wrap"]}>
          <button type="submit" className={classes["sch-inner-btn-wrap"]}>
            <FaSearch />
            <span className="blind">검색</span>
          </button>
          <label htmlfor="searchIn"></label>
          <input type="text" id="searchIn" name="search__In" value="" placeholder="검색어를 입력하세요" />
        </span>
      </form>
      <div className={classes["container"]}>
        <ul>
          <li>
            <Link to="/">1</Link>
            <div>타이틀</div>
          </li>
          <li>
            <Link to="/">2</Link>
            <div>타이틀</div>
          </li>
          <li>
            <Link to="/">3</Link>
            <div>타이틀</div>
          </li>
          <li>
            <Link to="/">4</Link>
            <div>타이틀</div>
          </li>
          <li>
            <Link to="/">5</Link>
            <div>타이틀</div>
          </li>
        </ul>
      </div>
    </article>
  );
};

export default SearchBox;
