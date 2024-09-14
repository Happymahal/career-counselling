import React, {Fragment} from 'react'

const FeaturesContent = [
    {
        icon: 'icon-15b',
        title: 'Browser App',
        desc: 'Access our free career counseling services seamlessly across web platforms, providing flexible and convenient support.',
        dataAos:'fade-up',
        dataDelay:'',
    },
    {
        icon: 'icon-16b',
        title: 'Free of Cost',
        desc: 'Enjoy our career counseling services at no cost, with transparent access to all features without any hidden fees.',
        dataAos:'fade-up',
        dataDelay:'50',
    },
    {
        icon: 'icon-17b',
        title: '24/7 Support',
        desc: 'Benefit from round-the-clock online support for all your career counseling needs, available anytime from anywhere.',
        dataAos:'fade-up',
        dataDelay:'100',
    },
]

const FeatureThree = () => {
    return (
        <Fragment>
            <div className="row gx-4 gx-xxl-5 justify-content-center">
                {FeaturesContent.map((val,i)=>(
                    <div key={i} className="col-lg-4 col-md-6" data-aos={val.dataAos} data-aos-delay={val.dataDelay}>
                        <div className="feature-style-three text-center mb-45">
                            <div className="icon"><img src={`assets/img/icon/${val.icon}.svg`} alt="icon"/></div>
                            <h3>
                                <a className="sect-title-two" >{val.title}</a>
                            </h3>
                            <p>{val.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </Fragment>
    )
}

export default FeatureThree