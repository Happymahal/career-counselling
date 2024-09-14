import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import Tilt from "react-parallax-tilt";

//components
import ThemeMenuThree from "../../components/header/ThemeMenuThree";
import ThemeBannerThree from "../../components/theme-banner/ThemeBannerThree";

import BlockStyleSeven from "../../components/block/BlockStyleSeven";
import FeatureFive from "../../components/feature/FeatureFive";
import BlockStyleTen from "../../components/block/BlockStyleTen";

import NewsletterOne from "../../components/call-to-action/NewsletterOne";
import FooterThree from "../../components/footer/FooterThree";

const CyberSecurity = () => {
  return (
    <Fragment>
      <div className="main-page-wrapper">
        {/* Helmet start */}
        <Helmet>
          <title>Career Counselling System</title>
        </Helmet>
        {/* Helmet end */}

        {/* header-area start */}
        <ThemeMenuThree />
        {/* header-area end */}

        {/*theme-banner-two start*/}
        <ThemeBannerThree />
        {/*theme-banner-two end*/}

        {/*about-techy start*/}
        <section className="about-techy bg-shape-3c pt-40 pb-105 pt-lg-60 pb-lg-10">
          <img
            className="about-shape-3c shape-1b d-none d-xl-inline-block"
            src="assets/img/shape/star-3b.svg"
            alt="shape"
          />
          <img
            className="about-shape-3c shape-2b d-none d-md-inline-block"
            src="assets/img/shape/star-4b.svg"
            alt="shape"
          />
          <img
            className="about-shape-3c shape-3b d-none d-lg-inline-block"
            src="assets/img/shape/star-4b.svg"
            alt="shape"
          />
          <img
            className="about-shape-3c shape-4b"
            src="assets/img/shape/star-7c.svg"
            alt="shape"
          />
          <img
            className="about-shape-3c shape-5b d-none d-xl-inline-block"
            src="assets/img/shape/star-4b.svg "
            alt="shape"
          />
          <div className="container">
            <div className="row gx-4 gx-xxl-5 align-items-center">
              <div
                className="col-lg-6"
                data-aos="fade-right"
                data-aos-delay={100}
              >
                <div
                  data-tilt
                  className="about-img-wrapper-three text-lg-end position-relative mb-45"
                >
                  <Tilt>
                    <img
                      className="main-img"
                      src="assets/img/about/ilus-1c.svg"
                      alt="ilustrate"
                    />
                  </Tilt>
                </div>
              </div>
              <div
                className="col-lg-6"
                data-aos="fade-left"
                data-aos-delay={100}
              >
                <BlockStyleSeven />
              </div>
            </div>
          </div>
        </section>
        {/*about-techy end*/}

        {/*our-services start*/}
        <section className="gradient-bg our-services service-bg-three pt-95 pb-55 pt-lg-55 pb-lg-15">
          <img
            className="service-shape-3c"
            src="assets/img/shape/line-round-6b.svg"
            alt="shape"
          />
          <div className="container">
            <div className="row gx-4 gx-xxl-5 align-items-center justify-content-center">
              <div className="col-xl-5 col-lg-6 col-md-8">
                <div className="section-title text-center mb-55">
                  <h3 className="sect-title mb-25" data-aos="fade-up">
                    Our Features
                  </h3>
                  <p data-aos="fade-up" data-aos-delay={100}>
                    Explore the cutting-edge features of our AI-driven career
                    counseling system. Our technology offers personalized
                    assessments, tailored career recommendations, and skill gap
                    identification, all designed to help you navigate your
                    career journey with confidence and clarity.
                  </p>
                </div>
              </div>
            </div>
            {/* FeatureFive */}
            <FeatureFive />
            {/* FeatureFive */}
          </div>
        </section>
        {/*our-services end*/}

        {/*teachy-work start*/}
        <section className="teachy-work work-bg-three pt-150 pb-30 pt-lg-50 pb-lg-20">
          <img
            className="work-shape-c shape-one"
            src="assets/img/shape/star-7c.svg"
            alt="shape"
          />
          <img
            className="work-shape-c shape-two"
            src="assets/img/shape/star-7c.svg"
            alt="shape"
          />
          <img
            className="work-shape-c shape-three"
            src="assets/img/shape/star-8c.svg"
            alt="shape"
          />
          <img
            className="work-shape-c shape-four"
            src="assets/img/shape/star-8c.svg"
            alt="shape"
          />
          <div className="container">
            <div className="row gx-4 gx-xxl-5 align-items-center pb-30">
              <div className="col-lg-6">
                <div
                  data-tilt
                  className="feature-img-wrapper mb-45"
                  data-aos="fade-up"
                >
                  <Tilt>
                    <img
                      src="assets/img/ilustration/ilus-02.svg"
                      alt="ilustration"
                    />
                  </Tilt>
                </div>
              </div>
              <div className="col-lg-6 order-lg-first">
                {/* BlockStyleTen */}
                <BlockStyleTen />
                {/* BlockStyleTen */}
              </div>
            </div>
          </div>
        </section>
        {/*teachy-work end*/}

        {/*teachy-security start*/}
        <section className="techy-security pt-75 pb-150 pt-lg-55 pb-lg-60">
          <div className="container">
            <div className="row gx-4 gx-xxl-5 justify-content-center">
              <div className="col-lg-6 col-md-8">
                <div className="section-title text-center mb-55">
                  <h6 className="sub-title-two mb-20">Career Data Security
                  </h6>
                  
                </div>
              </div>
            </div>
            <div className="row gx-4 gx-xxl-5">
              <div className="col-lg-12">
                <div className="ilustration-wrapper" data-aos="zoom-in">
                  <img
                    className="w-100"
                    src="assets/img/ilustration/ilus-03.svg"
                    alt="ilustration"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*teachy-security end*/}
        
        {/*call-to-action start*/}
        <NewsletterOne />
        {/*call-to-action end*/}

        {/*footer-area start*/}
        <FooterThree />
        {/*footer-area end*/}
      </div>
    </Fragment>
  );
};

export default CyberSecurity;
