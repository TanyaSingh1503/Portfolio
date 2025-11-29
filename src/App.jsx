import Home from './Pages/Home'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import About from './components/About'
import Portfolio from './components/Portfolio'
import TechnicalStack from './components/TechnicalStack'
import Contact from './components/Contact'
import Experience from './components/Experience'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/technicalstack" element={<TechnicalStack />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/Experience' element={<Experience/>}/>
      </Routes>
    </>
  )
}

export default App