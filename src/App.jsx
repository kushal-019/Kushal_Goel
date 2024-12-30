import './App.css'
import About from './Components/About'
import Contact from './Components/Contact'
import Services from './Components/Services'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import Project from './Components/Project'
import TechStacks from './Components/TechStacks'

function App() {

  return (
      <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      {/* Background Gradient */}
      <div className="fixed inset-0 -z-10 h-full w-full [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>



      <div className='container mx-auto px-8'>
        <Navbar />
        <Hero/>
        <About/>
        <TechStacks/>
        <Services/>
        <Project/>
        <Contact/>
      </div>
    </div>
  )
}

export default App
