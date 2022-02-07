import React from "react";
import { Link } from "react-router-dom";
import classes from "./SubContentBox.module.scss";
import HotIssue from "./HotIssue";
const SubContentBox = () => {
  return (
    <section id={classes.subContentBox}>
      <h2 className="blind">subContentBox</h2>
      <div className={classes["slide_wrapper"]}>
        <div className={classes["indi_container"]}>
          <ul className="indicator blind_wrap">
            <li>
              <Link to="/">
                <span>1</span>
              </Link>
            </li>
            <li>
              <Link to="/">
                <span>2</span>
              </Link>
            </li>
            <li>
              <Link to="/">
                <span>3</span>
              </Link>
            </li>
            <li>
              <Link to="/">
                <span>4</span>
              </Link>
            </li>
          </ul>
        </div>

        <div className={classes.btn}>
          <button type="button" className="next"></button>
          <button type="button" className="prev"></button>
        </div>

        <div className={classes["content-area"]}>
          <div className={classes["slide-con-wrap"]}>
            <div className={["slide_01 action"]}>
              <span className="blind">slide_01</span>
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

      <div className={classes["single-edit"]}>
        <div className={classes["main-title"]}>
          <h3>single Edit</h3>
        </div>
        <div className={classes["container"]}>
          <div className={classes["item"]}>
            <div>img</div>
            <div>content</div>
          </div>
          <div className={classes["item"]}>
            <dl>
              <dt>content</dt>
              <dd>메인타이틀</dd>
            </dl>
          </div>
          <div className={classes["item"]}>
            <dl>
              <dt>content</dt>
              <dd>메인타이틀</dd>
            </dl>
          </div>
          <div className={classes["item"]}>
            <dl>
              <dt>content</dt>
              <dd>메인타이틀</dd>
            </dl>
          </div>
        </div>
      </div>
      <HotIssue />
    </section>
  );
};

export default SubContentBox;
