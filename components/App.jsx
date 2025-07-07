import { useState } from 'react'
import Header from './header'
import Intro from './intro'
import Project from './project'
import AboutMe from './about'
import Contact from './contact'

function App() {
  return (
    <>
      <Header />
      <Intro />
      <Project title="Project Title" description="Description" gitLink="" liveSiteLink="" image="../images/github-mark-white.svg"/>
      <Project title="Project Title" description="Description" gitLink="" liveSiteLink="" image="../images/github-mark-white.svg" reverse={true} />
      <Project title="Project Title" description="Description" gitLink="" liveSiteLink="" image="../images/github-mark-white.svg"/>
      <AboutMe />
      <Contact />
    </>
  )
}

export default App
