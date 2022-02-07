import React from "react";
import classes from "./NewBox.module.scss";
const NewBox = () => {
  return (
    <article id={classes.newBox}>
      <h2 className="blind">subscribe</h2>
      <div className={classes["subscribe-inner"]}>
        <span>당신에게 필요한 소식들을 메일로 받아보세요.</span>
        <div className={classes["subscribe-input-box"]}>
          <button>구독</button>
          <input type="text" name="subscribe" placeholder="이메일 주소를 입력해주세요." value="" />
        </div>
      </div>
    </article>
  );
};

export default NewBox;
