import React from 'react'
import Home from './Components/home'
import About from './Components/about'
import Projects from './Components/projects'
import Contact from './Components/contact'

function page() {
  return (
    <div>
      <Home/>
      <About/>
      <Projects/>
      <Contact/>
      
    </div>
  )
}

export default page