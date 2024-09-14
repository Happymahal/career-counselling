import React,{Fragment} from 'react'
import { Link } from 'react-router-dom'


import SocialOne from '../social/SocialOne'




const CopyRightThree = () => {
  return (
    <Fragment>
        <div className="copyright-three">
            <div className="container">
                <div className="row gx-4 gx-xxl-5 pt-60 align-items-center">
                    <div className="col-xl-4 col-lg-6 pb-30">
                        
                    </div>
                    <div className="col-xl-4 col-lg-6  text-center pb-30">
                        <p className="text-white mb-20">
                            <a href="https://themeforest.net/user/hamina-themes/portfolio">Career Counselling</a>
                            © {new Date().getFullYear()}, All Rights Reserved</p>
                    </div>
                    <div
                        className="col-xl-4 col-lg-6 d-flex justify-content-center justify-content-lg-start justify-content-xl-end pb-30">
                            {/* SocialOne */}
                            <SocialOne />
                            {/* SocialOne */}
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
  )
}

export default CopyRightThree