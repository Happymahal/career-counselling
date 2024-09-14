import React,{Fragment} from 'react'
import { Link } from 'react-router-dom'


const socialContent = [
    {
        icon: 'fab fa-facebook-f',
        routerPath:'',
    },
    {
        icon: 'fab fa-twitter',
        routerPath:'',
    },
    {
        icon: 'fab fa-linkedin-in',
        routerPath:'',
    },
    {
        icon: 'fab fa-youtube',
        routerPath:'',
    },
]

const SocialFive = () => {
    return (
        <Fragment>
            <div className="text-center text-md-end team-social-three social-style-five d-block mb-40">
               {socialContent.map((val, i)=>(
                 <Link key={i} to={val.routerPath}>
                    <i className={val.icon}/>
                </Link>
               ))}
            </div>
        </Fragment>
    )
}

export default SocialFive
