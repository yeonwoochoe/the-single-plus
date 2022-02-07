import React from "react";
import classes from "./HotIssue.module.scss";
const HotIssue = () => {
  return (
    <div className={classes["hot-issue"]}>
      <div className={classes["main-title"]}>
        <h3>Hot Issue</h3>
      </div>
      <div className={classes["container"]}>
        <div className={classes["item"]}>
          <div>content</div>
          <div>img</div>
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
  );
};
export default HotIssue;
