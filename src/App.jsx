import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import Gutters from './components/Gutters/Gutters';
import Residential from './components/Gutters/Residential';
import Commercial from './components/Gutters/Commercial';
import Roofing from './components/Roofing/Roofing';
import Metal from './components/Roofing/Metal';

import Footer from './components/Footer';
import NotFound from './components/NotFound';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path='/gutters' element={<Gutters />} >
          <Route path='/gutters/residential' element={<Residential />} />
          <Route path='/gutters/commercial' element={<Commercial />} />
        </Route>
        <Route path='/roofing' element={<Roofing />} >
          <Route path='/roofing/residential' element={<Metal />} />
          <Route path='/roofing/commercial' element={<Commercial />} />
        </Route>
        {/* Catch-all route for 404 page */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>      
      <Footer />
    </Router>
  )
}

export default App