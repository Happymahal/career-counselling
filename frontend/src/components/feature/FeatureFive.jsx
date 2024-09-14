import React, {Fragment} from 'react'
import { Link } from 'react-router-dom'


const featureContent = [
   {
    img: 'icon-33c',
    title: 'Personalized Career Assessment',
    desc: 'Our AI system evaluates your interests, skills, and preferences to deliver customized career insights and recommendations tailored to your individual profile.',
    dataAos:'fade-up',
    dataDelay: ''
   },
   {
    img: 'icon-34c',
    title: 'Tailored Career Path Recommendations',
    desc: 'Receive actionable and data-driven career path suggestions based on a thorough analysis of your assessment results, helping you navigate your career choices with confidence.',
    dataAos:'fade-up',
    dataDelay: '100'
   },
   {
    img: 'icon-35c',
    title: 'Skill Gap Identification Analysis',
    desc: 'Identify key skill gaps and areas for improvement with our AI-powered analysis, enabling you to focus on acquiring the skills needed for your chosen career path.',
    dataAos:'fade-up',
    dataDelay: '200'
   },

]

const FeatureFive = () => {
    return (
        <Fragment>
            <div className="row gx-4 gx-xxl-5">
                {featureContent.map((val, i)=>(
                    <div key={i} className="col-lg-4 col-md-6" data-aos={val.dataAos} data-aos-delay={val.dataDelay}>
                        <div className="feature-style-five mb-45">
                            <div className="icon mb-30">
                                <img src={`assets/img/icon/${val.img}.svg`}alt="icon"/>
                            </div>
                            <h2 className="mb-20">
                                <Link className="sect-title-two" >{val.title}</Link>
                            </h2>
                            <p>{val.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </Fragment>
    )
}

export default FeatureFive