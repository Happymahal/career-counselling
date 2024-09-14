import React, {Fragment} from 'react'
import { Link } from 'react-router-dom'

const BlockStyleOneA = () => {
    return (
        <Fragment>
            <div className="block-style-one ps-lg-1 mb-45">
                <h2 className="mb-15">About Our Innovative Career Counseling System
                </h2>
                <p>Explore our state-of-the-art career counseling system designed to deliver personalized career guidance with transparency and efficiency. Leveraging advanced AI technology, we offer clear insights and actionable recommendations to help you navigate your career path, all while providing accessible and user-friendly support.
                </p>
                <ul className="block-box box-two list-none">
                    <li>
                        <a href="contact.html">
                            <span className="img-bg"><img src="assets/img/icon/icon-1a.svg" alt="icon"/></span>
                            <span>Free of Cost</span>
                        </a>
                    </li>
                    <li>
                        <a href="contact.html">
                            <span className="img-bg"><img src="assets/img/icon/icon-2a.svg" alt="icon"/></span>
                            <span>24/7 Online Support</span>
                        </a>
                    </li>
                </ul>
                <Link className="theme_btn mt-60" to="/about">More Details</Link>
            </div>
        </Fragment>
    )
}

export default BlockStyleOneA