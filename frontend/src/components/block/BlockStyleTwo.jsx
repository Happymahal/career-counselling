import React, {Fragment} from 'react'
import { Link } from 'react-router-dom'



const BlockStyleTwo = () => {
    return (
        <Fragment>
            <div className="block-style-two text-center pb-90">
                <img
                    className="news-shape-one d-none d-xl-block"
                    src="assets/img/shape/line-round-3a.svg"
                    alt="shape"/>
                <h3>Ready to explore your career path? Check your options now!</h3>
                <Link to="/contact" className="theme_btn">Contact us</Link>
            </div>
        </Fragment>
    )
}

export default BlockStyleTwo