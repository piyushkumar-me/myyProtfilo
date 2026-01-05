import { useState } from 'react'
import './App.css'
import Particles from './components/Particles'

import Nav from './components/nav/Nav'
import Contact from './components/pages/contact/Contact'
import About from './components/pages/about/About'
import Projects from './components/pages/projects/Project'
import { Route, Routes } from 'react-router-dom'
import Home from './components/pages/home/Home'
import Certificate from './components/pages/certificate/Certificate'
import Footer from './components/footer/Footer'






function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="relative w-full h-screen  sm:overflow-auto bg-black ">

        {/* Particles */}
        <Particles
          className="absolute inset-0 z-0   h-auto "
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={300}
          particleSpread={10}
          speed={0.3}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />

        {/* Navbar */}
        <Nav />

        {/* Hero Content (center box only clickable) */}
        <div className="absolute inset-0 z-10 flex items-center justify-center o">
          <div className="absolute inset-0 z-10 pt-16">

            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/projects' element={<Projects />} />
              <Route path='/certificates' element={<Certificate />} />
              <Route path='/contact' element={<Contact />} />
            </Routes>

            <Footer/>
          </div>

        </div>
        
        

      </div>
      

    </>

  )
}

export default App
