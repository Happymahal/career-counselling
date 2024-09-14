import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const SideBar = (props) => {
  const { onClick, value } = props;

  return (
    <Fragment>
      {/* slide-bar start */}
      <aside className={value ? "slide-bar show" : "slide-bar"}>
        <div className="close-mobile-menu">
          <a href="#" onClick={onClick}>
            <i className="fas fa-times" />
          </a>
        </div>
        {/* offset-sidebar start */}
        <div className="offset-sidebar">
          <div className="offset-widget mb-40">
            <div className="info-widget">
              <h4 className="offset-title mb-20">About Us</h4>
              <p className="mb-30">
                Welcome to our website! I’ve developed an AI-powered career
                counseling system designed to guide users in exploring career
                paths in computer science. Our system asks users questions about
                their interests in various fields and provides personalized
                career recommendations based on their responses.
              </p>
            </div>
          </div>
          <div className="offset-widget mb-30 pr-10">
            <div className="info-widget info-widget2">
              <h4 className="offset-title mb-20">Contact Info</h4>
              <p>
                <i className="fal fa-map" />
                Uk, London
              </p>
              <p>
                <i className="fal fa-phone" />
                +44-7407-601966
              </p>
              <p>
                <i className="fal fa-envelope-open" />
                happymahal@gmail.com
              </p>
            </div>
          </div>
          {/* <div className="login-btn text-center">
            <Link className="theme_btn w-100" to="/login">
              Login
            </Link>
          </div> */}
        </div>
        {/* offset-sidebar end */}
      </aside>
      {/* slide-bar end */}
    </Fragment>
  );
};

export default SideBar;
