import beauty from "../footer-beauty.svg";
import { Link } from "react-router-dom";
import classes from "./BeautySns.module.scss";
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter, FaBold } from "react-icons/fa";

const BeautySns = () => {
  return (
    <div className={classes["beauty-plus-sns"]}>
      <h2>
        <img src={beauty} alt="Logo footer singles" />
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
  );
};

export default BeautySns;
