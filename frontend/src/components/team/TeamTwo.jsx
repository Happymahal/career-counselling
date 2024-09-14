import React, {Fragment} from 'react'
import { Link } from 'react-router-dom'

const teamContent = [
    {
        img: 'team-4d',
        desig: 'Developer',
        name: 'Happy Mahal',
        social:[
            'fab fa-facebook-f',
            'fab fa-twitter',
            'fab fa-linkedin-in',
            'fab fa-youtube',
        ],
        dataAos:'fade-up',
        dataDelay: '50',
    },
]

const TeamTwo = () => {
    return (
        <Fragment>
            <div className="row gx-4 gx-xxl-5 justify-content-center">
                {teamContent.map((val, i)=>(
                    <div key={i} className="col-lg-4 col-md-6" data-aos={val.dataAos} data-aos-delay={val.dataDelay}>
                        <div className="team-style-two text-center mb-45">
                            <div className="team-thumb">
                                <Link to="/team-details"><img src={`assets/img/team/${val.img}.png`} alt="img"/></Link>
                                <div className="team-social-two">
                                    {val.social.map((val, i)=>(
                                        <a key={i} href="#">
                                            <i className={val}/>
                                        </a>
                                    ))}
                                </div>
                            </div>
                            <div className="team-content">
                                <p>{val.desig}</p>
                                <h3 className="sect-title-two">
                                    <Link to="/team-details">{val.name}</Link>
                                </h3>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Fragment>
    )
}

export default TeamTwo