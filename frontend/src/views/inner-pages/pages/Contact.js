import React, { Fragment } from "react";
import { Helmet } from "react-helmet";

//componets
import ThemeMenuThree from "../../../components/header/ThemeMenuThree";
import PageTitle from "../../../components/page-title/PageTitle";
import NewsletterTwo from "../../../components/call-to-action/NewsletterTwo";
import FooterThree from "../../../components/footer/FooterThree";
import ContactForm from "../../../components/form/ContactForm";
import SocialFive from "../../../components/social/SocialFive";

const Contact = () => {
  return (
    <Fragment>
      <div className="main-page-wrapper">
        {/* Helmet start */}
        <Helmet>
          <title>Contact || Career Counselling System</title>
        </Helmet>
        {/* Helmet end */}

        {/* ThemeMenuThree */}
        <ThemeMenuThree />
        {/* ThemeMenuThree */}

        {/* PageTitle */}
        <PageTitle title="Contact" />
        {/* PageTitle */}

        {/*contact-section start*/}
        <div className="contact-section pt-145 pb-100 pt-lg-60 pb-lg-15">
          <div className="container">
            <div className="row gx-4 gx-xxl-5">
              <div className="col-lg-5">
                <div className="contact-info-wrapper me-xxl-5 pe-xxl-5 mb-45">
                  <h2 className="sect-title mb-5">Let’s Get Connect With Us</h2>
                  <div className="single-info-box mb-50">
                    <div className="icon">
                      <i className="bi bi-telephone" />
                    </div>
                    <span className="mb-10">+44-7407-601966</span>
                    
                  </div>
                  <div className="single-info-box mb-50">
                    <div className="icon">
                      <i className="bi bi-geo-alt" />
                    </div>
                    <span className="mb-10">UK, London</span>
                    
                  </div>
                  <div className="single-info-box mb-50">
                    <div className="icon">
                      <i className="bi bi-envelope" />
                    </div>
                    <span className="mb-10">happymahal@gmail.com</span>
                    
                  </div>
                  <div className="single-info-box mb-40">
                    <div className="icon">
                      <i className="bi bi-person" />
                    </div>
                    <span className="mb-10">HAPPY MAHAL</span>
                    
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="contact-content-wrapper mb-45">
                  <div className="row gx-4 gx-xxl-5 px-0 align-items-center mb-25">
                    <div className="col-xxl-8 col-md-7">
                      <div className="text-center text-md-start">
                        <p className="text-white mb-40">
                          Coordinate with us to access user-focused resources
                          and personalized support. We are dedicated to
                          providing clear, client-centered communication to
                          address your career counseling needs effectively.
                        </p>
                      </div>
                    </div>
                    <div className="col-xxl-4 col-md-5">
                      {/* SocialFive start */}
                      <SocialFive />
                      {/* SocialFive end */}
                    </div>
                  </div>
                  <div className="contact-map pb-40 mb-xxl-4">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d99123.15679878605!2d-0.127647!3d51.507351!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2suk!4v1656070170544!5m2!1sen!2suk" />
                  </div>
                  <div className="contact-form-two">
                    <h3 className="post-title mb-50">Send Us Message</h3>
                    {/* ContactForm start */}
                    <ContactForm />
                    {/* ContactForm end */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*contact-section end*/}

        {/*techy-newsletter start*/}
        <NewsletterTwo />
        {/*techy-newsletter end*/}

        {/* FooterThree start */}
        <FooterThree />
        {/* FooterThree end */}
      </div>
    </Fragment>
  );
};

export default Contact;
