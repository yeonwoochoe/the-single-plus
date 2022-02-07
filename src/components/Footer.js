import React from "react";
import singles from "../footer-singles.svg";
import { Link } from "react-router-dom";
import classes from "./Footer.module.scss";
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter, FaBold } from "react-icons/fa";
import BeautySns from "./BeautySns";
const Footer = () => {
  return (
    <footer id={classes.footBox}>
      <div className={classes["container"]}>
        <div className={classes["singles-sns"]}>
          <h2>
            <img src={singles} alt="Logo footer singles" />
          </h2>
          <ul>
            <li>
              <Link to="/">
                <FaFacebookF />
              </Link>
            </li>
            <li>
              <Link to="/">
                <FaInstagram />
              </Link>
            </li>
            <li>
              <Link to="/">
                <FaYoutube />
              </Link>
            </li>
            <li>
              <Link to="/">
                <FaTwitter />
              </Link>
            </li>
            <li className="">
              <Link to="/">
                <FaBold />
              </Link>
            </li>
          </ul>
        </div>

        <div className={classes["company-area"]}>
          <div className="company-inner">
            <h3>(주)더북컴퍼니</h3>
            <address className={classes.address}>
              <p>주소: (06135) 서울특별시 강남구 봉은사로 226 (역삼동, 더북컴퍼니)</p>
              <p>
                대표이사: 이소영<span>&#32;&#124;&#32;</span>사업자등록번호: 211-87-45869
                <span>
                  <span>&#32;&#124;&#32;</span>통신판매업신고번호: 제 2017-서울강남-03220
                </span>
              </p>
              <div>
                대표번호: 02-3458-7100<span>&#32;&#124;&#32;</span>팩스: 02-3458-7119
                <span>
                  <span>&#32;&#124;&#32;</span>이메일: <Link to="mailto:info@thesingle.co.kr">info@thesingle.co.kr</Link>
                  <span>&#32;&#124;&#32;</span>
                  <Link to="http://www.ftc.go.kr/bizCommPop.do?wrkr_no=2118745869">사업자등록정보 확인</Link>
                </span>
              </div>
              <h4>호스팅 서비스: (주)가비아</h4>
              <p>ⓒ 2021 THE BOOK COMPANY. ALL RIGHTS RESERVED.</p>
            </address>
            <div className={classes["information"]}>
              <div>
                <Link to="https://thebookcompany.co.kr/brand/">매체소개</Link>
                <span>&#124;</span>
                <Link to="/">이용약관</Link>
                <span>&#124;</span>
                <Link to="/">개인정보처리방침</Link>
                <span>&#124;</span>
                <Link to="/">청소년보호정책</Link>
                <span>&#124;</span>
                <Link to="/">이메일무단수집거부</Link>
              </div>
              <div>
                <Link to="/">공지사항</Link>
                <span>&#124;</span>
                <Link to="/">포인트정책</Link>
                <span>&#124;</span>
                <Link to="/">광고제휴문의</Link>
                <span>&#124;</span>
                <Link to="/">문의하기</Link>
                <span>&#124;</span>
                <Link to="/">언론윤리강령</Link>
              </div>
            </div>
          </div>
        </div>
        <BeautySns />
      </div>
    </footer>
  );
};

export default Footer;
