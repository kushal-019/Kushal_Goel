import './App.css'
import About from './assets/Components/About'
import Contact from './assets/Components/Contact'
import Experience from './assets/Components/Experience'
import Hero from './assets/Components/Hero'
import Navbar from './assets/Components/Navbar'
import Project from './assets/Components/Project'
import TechStacks from './assets/Components/TechStacks'

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
        {/* <Experience/> */}
        <Project/>
        <Contact/>
      </div>
    </div>
  )
}

export default App
