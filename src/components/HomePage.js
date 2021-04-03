import React from 'react'
import Description from './Description'
import EmailForm from './EmailForm'
import Footer from './Footer'
import Mern from './Mern'
import Meta from './Meta'
import Navbar from './Navbar'
import Portfolio from './Portfolio'
import Skills from './Skills'

const HomePage = () => {
  return (
    <div>
      <Meta />
      <Navbar />
      <Description />
      <Mern />
      {/* Skiils */}
      <Skills />
      {/* Porftilio */}
      <Portfolio />
      {/* Project */}
      {/* Email me */}
      <EmailForm />
      <Footer />
    </div>
  )
}

export default HomePage
