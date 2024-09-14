import React, { Fragment, useState } from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

import ThemeMenuThree from '../../../components/header/ThemeMenuThree'
import PageTitle from '../../../components/page-title/PageTitle'
import FeatureThree from '../../../components/feature/FeatureThree'
import BlockStyleOneA from '../../../components/block/BlockStyleOneA'
import CounterTwoA from '../../../components/counter/CounterTwoA'
import TeamTwo from '../../../components/team/TeamTwo'
import PricingTab from '../../../components/price/PricingTab'
import NewsletterOne from '../../../components/call-to-action/NewsletterOne'
import FooterThree from '../../../components/footer/FooterThree'
import ModalVideos from '../../../components/modal-video/ModalVideos'


const About = () => {
    const [open, setOpen] = useState(false);
    const OpenModal = () => {
        setOpen(!open)
    }

    return (
        <Fragment>
            <ModalVideos isOpen={open} onClick={OpenModal} />
            <div className="main-page-wrapper">
                {/* Helmet start */}
                <Helmet>
                    <title>About Us || Career Counselling System</title>
                </Helmet>
                {/* Helmet end */}

                {/* ThemeMenuThree */}
                <ThemeMenuThree />
                {/* ThemeMenuThree */}

                {/* PageTitle */}
                <PageTitle title="About Us" />
                {/* PageTitle */}


                {/*techy-feature start*/}
                <section className="techy-feature pt-150 pt-lg-100 pb-30 pb-lg-15">
                    <div className="container">
                        <FeatureThree />
                    </div>
                </section>
                {/*techy-feature end*/}

                {/*about-techy start*/}
                <section className="about-techy about-techy-4d pt-140 pb-75 pt-lg-60 pb-lg-15">
                    <img className="about-shape-4d shape-1b d-none d-xl-inline-block" src="assets/img/shape/star-3b.svg" alt="shape" />
                    <img className="about-shape-4d shape-2b d-none d-lg-inline-block" src="assets/img/shape/star-4b.svg" alt="shape" />
                    <img className="about-shape-4d shape-3b d-none d-md-inline-block" src="assets/img/shape/star-4b.svg" alt="shape" />
                    <img className="about-shape-4d shape-4b d-none d-md-inline-block" src="assets/img/shape/star-7c.svg" alt="shape" />
                    <img className="about-shape-4d shape-5b d-none d-xl-inline-block" src="assets/img/shape/star-4b.svg" alt="shape" />
                    <div className="container">
                        <div className="row gx-4 gx-xxl-5 align-items-center">
                            <div className="col-lg-7" data-aos="fade-right" data-aos-delay={100}>
                                <div className="about-img-wrapper-four position-relative mb-45">
                                    <img className="main-img" src="assets/img/about/about-1.png" alt="img" />
                                    
                                    <img className="shape-one" src="assets/img/shape/line-round-2a.svg" alt="shape" />
                                </div>
                            </div>
                            <div className="col-lg-5" data-aos="fade-left" data-aos-delay={100}>
                                <BlockStyleOneA />
                            </div>
                        </div>
                    </div>
                </section>
                {/*about-techy end*/}



                {/*techy-team start*/}
                <section className="gradient-bg techy-team team-sec-two mt-0 pt-95  pb-90 pt-lg-55 pb-lg-60">
                    <img className="team-shape shape-1b" src="assets/img/shape/star-3b.svg" alt="shape" />
                    <img className="team-shape shape-2b" src="assets/img/shape/star-4b.svg" alt="shape" />
                    <img className="team-shape shape-3b" src="assets/img/shape/star-6b.svg" alt="shape" />
                    <img className="team-shape shape-4b" src="assets/img/shape/star-5b.svg" alt="shape" />
                    <img className="team-shape shape-5b" src="assets/img/shape/star-5b.svg" alt="shape" />
                    <img className="team-shape shape-6b" src="assets/img/shape/line-round-6b.svg" alt="shape" />
                    <div className="container">
                        <div className="row gx-4 gx-xxl-5">
                            <div className="col-lg-12">
                                <div className="section-title-two text-center mb-55">
                                    <h6 className="sub-title mb-20">Our Team</h6>
                                    <h2 className="sect-title">Developed By</h2>
                                </div>
                            </div>
                        </div>
                        <TeamTwo />
                        
                    </div>
                </section>
                {/*techy-team end*/}


                {/*techy-newsletter start*/}
                <NewsletterOne />
                {/*techy-newsletter end*/}

                {/*FooterThree start*/}
                <FooterThree />
                {/*FooterThree end*/}

            </div>

        </Fragment>
    )
}

export default About