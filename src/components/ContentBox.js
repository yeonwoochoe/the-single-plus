import React from "react";
import classes from "./ContentBox.module.scss";

const ContentBox = () => {
  return (
    <section id={classes.contentBox}>
      <div className={classes["main-title"]}>
        <h2>Lifestyle</h2>
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
    </section>
  );
};

export default ContentBox;
