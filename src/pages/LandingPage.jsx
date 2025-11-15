import React from 'react'
import Home from './Home'
import About from './About'
import Services from './Services'
import Contact from './Contact'
import Projects from './Projects'
import Careers from './Careers'

const LandingPage = () => {
  return (
   <>
        <section id="home">
            <Home/>
        </section>
    
        <section id="services">
            <Services/>
        </section>
        <section id="projects">
            <Projects/>
        </section>
        <section id="careers">
            <Careers/>
        </section>
            <section id="about">
            <About/>
        </section>
        <section id="contact">
            <Contact/>
        </section>
   </>
  )
}

export default LandingPage