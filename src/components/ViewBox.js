import React from "react";
import { Link } from "react-router-dom";
import classes from "./ViewBox.module.scss";
const ViewBox = () => {
  return (
    <section id={classes.viewBox}>
      <div className={classes["container"]}>
        <div className={classes["main-view"]}>
          <h2 className="blind">main-view</h2>
          <div className={classes["slide_wrapper"]}>
            <div className={classes.btn}>
              <button type="button" className="next"></button>
              <button type="button" className="prev"></button>
            </div>

            <div className={classes["content-area"]}>
              <div className={classes["slide-con-wrap"]}>
                <div className={classes.slide}>
                  <span className="blind">slide_01</span>
                  <ul>
                    <li className={classes["content-area"]}>content-area</li>
                    <li className={classes["description-area"]}>description-area</li>
                  </ul>
                </div>
                <div className="slide_02">
                  <Link to="/">
                    <span className="blind">slide_02</span>
                  </Link>
                </div>
                <div className="slide_03">
                  <Link to="/">
                    <span className="blind">slide_03</span>
                  </Link>
                </div>
                <div className="slide_04">
                  <Link to="/">
                    <span className="blind">slide_04</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes["show-case"]}>
          <div className={classes["main-title"]}>
            <h3>showcase</h3>
          </div>
          <div className={classes["show-inner"]}>
            <ul>
              <li>
                <div>content</div>
                <div>title</div>
              </li>
              <li>
                <div>content</div>
                <div>title</div>
              </li>
              <li>
                <div>content</div>
                <div>title</div>
              </li>
              <li>
                {" "}
                <div>content</div>
                <div>title</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ViewBox;
