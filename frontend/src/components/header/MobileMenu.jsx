import React from "react";
import { Link } from "react-router-dom";
import MetisMenu from "@metismenu/react";
import "metismenujs/dist/metismenujs.css";

const HomeMenu = [
  {
    name: "Landing Page",
    routerPath: "/",
  },
];

const Miscellaneous = [
  {
    name: "About Us",
    routerPath: "/about",
  },
  {
    name: "Chat Bot",
    routerPath: "/feature",
  },
];

const MobileMenu = (props) => {
  const { onClick, active } = props;

  return (
    // <div className={active?"mobile-menu-wrapper show d-lg-none":"mobile-menu-wrapper d-lg-none"}>
    <div className={`mobile-menu-wrapper ${active} d-lg-none`}>
      <div className="text-xl text-white font-bold uppercase no-underline">
        <Link to="/">CAREER COUNSELLING</Link>
      </div>
      <div className="close-menu" onClick={onClick}>
        <i className="bi bi-x-lg"></i>
      </div>
      <div className="side-mobile-menu">
        <MetisMenu>
          <li className="has-dropdown">
            <a href="#">Home</a>
            <ul className="sub-menu">
              {HomeMenu.map((val, i) => (
                <li key={i}>
                  <Link onClick={onClick} to={val.routerPath}>
                    {val.name}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          <li className="has-dropdown">
            <a href="#">Pages</a>
            <ul className="sub-menu">
              {Miscellaneous.map((val, i) => (
                <li onClick={onClick} key={i}>
                  <Link to={val.routerPath}>{val.name}</Link>
                </li>
              ))}
            </ul>
          </li>

          <li onClick={onClick}>
            <Link to="/contact">Contact Us</Link>
          </li>
        </MetisMenu>
      </div>
      {/* <div className="login-btn text-center mt-4">
            <Link className="theme_btn w-100" to="/login">Login</Link>
            <p className="text-white">Don't have an account ? Please <Link to="/signup" className="border-bottom">Signup</Link> today</p>
        </div> */}
    </div>
  );
};

export default MobileMenu;
