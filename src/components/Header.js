import React from "react";
import { CgSearch } from "react-icons/cg";
import logo from "./../image.png";
import { Link } from "react-router-dom";
import classes from "./Header.module.scss";

const Header = () => {
  return (
    <header id={classes.headBox}>
      <div className={classes["container"]}>
        <h1>
          <Link to="/">
            <img src={logo} alt="" />
            <span className="blind">single-plus</span>
          </Link>
        </h1>
        <nav className={classes.navigation}>
          <div className={classes.gnb}>
            <ul>
              <li>
                <Link to="/">showcase</Link>
              </li>
              <li>
                <Link to="/">lifestyle</Link>
              </li>
              <li>
                <Link to="/">single edit</Link>
              </li>
            </ul>
          </div>
          <div className={classes.unb}>
            <ul>
              <li>
                <Link to="/">
                  login
                  <span>&#124;</span>
                </Link>
              </li>
              <li>
                {" "}
                <Link to="/">join</Link>
              </li>
              <li>
                <button>
                  <CgSearch />
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
