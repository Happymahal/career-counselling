import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const BlockStyleTen = () => {
  return (
    <Fragment>
      <div className="block-style-ten">
        <div className="section-title mb-45 pe-xxl-5" data-aos="fade-up">
          <h6 className="sub-title-two mb-20">Career Counseling System</h6>
          <h3 className="sect-title mb-25">
            Get the right Career Counselling
          </h3>
          <p className="mb-15">
            Our Career Counseling System leverages advanced AI technology to
            provide personalized career guidance. By analyzing your interests,
            skills, and preferences, our system delivers tailored career
            recommendations and insights.
          </p>
          <p>
            It helps you explore suitable career paths, identify skill gaps, and
            make informed decisions about your professional future, all with a
            user-friendly and data-driven approach.
          </p>
          <Link className="theme_btn mt-55" to="/project-details">
            More Details
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default BlockStyleTen;
