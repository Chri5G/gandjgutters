import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home/Home';
import Gutters from './components/Gutters/Gutters';
import Residential from './components/Gutters/Residential';
import Commercial from './components/Gutters/Commercial';
import Covers from './components/Gutters/Covers';
import Roofing from './components/Roofing/Roofing';
import Metal from './components/Roofing/Metal';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
import FreeEstimate from './components/FreeEstimate';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path='/gutters' element={<Gutters />} />
        <Route path='/gutters/residential' element={<Residential />} />
        <Route path='/gutters/commercial' element={<Commercial />} />
        <Route path='/gutters/covers' element={<Covers />} />
        <Route path='/roofing' element={<Roofing />} />
        <Route path='/roofing/metal' element={<Metal />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/free_estimate' element={<FreeEstimate />} />

        {/* Catch-all route for 404 page */}
        <Route path="*" element={<NotFound />} />
      </Routes>      
      <Footer />
    </Router>
  )
}

export default App