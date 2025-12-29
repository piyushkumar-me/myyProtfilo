import { useState } from 'react'
import './App.css'
import Particles from './components/Particles'

import Nav from './components/nav/Nav'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Contact from './components/pages/contact/Contact'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="relative w-full h-screen lg:overflow-hidden sm:overflow-auto bg-black ">

        {/* Particles */}
        <Particles
          className="absolute inset-0 z-0   h-auto "
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={100}
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

              {/* <Home/> */}
            <About />
            {/* <Contact/> */}
          </div>

        </div>
 SocialIcons
      </div>

    </>

  )
}

export default App
