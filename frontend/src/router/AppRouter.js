import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ScrollTopBehavior from '../components/ScrollTopBehavior'

//Home Pages
import CyberSecurity from '../views/home-pages/CyberSecurity'

//inner-pages
//about-page
import About from '../views/inner-pages/about/About'
//services-pages
// import Services from '../views/inner-pages/services/Services'
// import ServicesDetails from '../views/inner-pages/services/ServicesDetails'

//team-pages
// import Team from '../views/inner-pages/team/Team'
// import TeamDetails from '../views/inner-pages/team/TeamDetails'

//pages
// import Price from '../views/inner-pages/pages/Price'
// import Faq from '../views/inner-pages/pages/Faq'
// import Error from '../views/inner-pages/pages/Error'
// import Login from '../views/inner-pages/pages/Login'
// import Signup from '../views/inner-pages/pages/Signup'
// import ComingSoon from '../views/inner-pages/pages/ComingSoon'

//project-pages
// import ProjectGrid from '../views/inner-pages/project/ProjectGrid'
// import ProjectMasonry from '../views/inner-pages/project/ProjectMasonry'
// import ProjectDetails from '../views/inner-pages/project/ProjectDetails'

//blog-pages
// import BlogGrid from '../views/inner-pages/blog/BlogGrid'
// import BlogMasonry from '../views/inner-pages/blog/BlogMasonry'
// import BlogClassic from '../views/inner-pages/blog/BlogClassic'
// import BlogDetailsV1 from '../views/inner-pages/blog/BlogDetailsV1'
// import BlogDetailsV2 from '../views/inner-pages/blog/BlogDetailsV2'

//conatct-page
import Contact from '../views/inner-pages/pages/Contact'
import Career from '../views/inner-pages/pages/Career'
import Feature from '../views/inner-pages/pages/ChatFeature'

//error-404
import NotFound from '../views/NotFound'


const AppRouter = () => {
    return (
        <>
            <ScrollTopBehavior />
            <Routes>
                <Route path="/" element={<CyberSecurity />} />

                <Route path="/about" element={<About />} />

                {/* <Route path="/services" element={<Services />} />
                <Route path="/services-details" element={<ServicesDetails />} /> */}

                {/* <Route path="/team" element={<Team />} />
                <Route path="/team-details" element={<TeamDetails />} /> */}

                {/* <Route path="/price" element={<Price />} />
                <Route path="/faq" element={<Faq />} />
                <Route path="/error" element={<Error />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/coming-soon" element={<ComingSoon />} /> */}

                {/* <Route path="/project-grid" element={<ProjectGrid />} />
                <Route path="/project-masonry" element={<ProjectMasonry />} />
                <Route path="/project-details" element={<ProjectDetails />} />

                <Route path="/blog-grid" element={<BlogGrid />} />
                <Route path="/blog-masonry" element={<BlogMasonry />} />
                <Route path="/blog-classic" element={<BlogClassic />} />
                <Route path="/blog-details-v1" element={<BlogDetailsV1 />} />
                <Route path="/blog-details-v2" element={<BlogDetailsV2 />} /> */}

                <Route path="/contact" element={<Contact />} />
                <Route path="/career" element={<Career />} />
                <Route path="/feature" element={<Feature />} />

                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    )
}

export default AppRouter