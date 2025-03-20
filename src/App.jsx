import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from './components/Header';
import Home from './components/Intro';
import Intro from './components/Gutters/Intro';
import Residential from './components/Gutters/Residential';
import Commercial from './components/Gutters/Commercial';
import Footer from './components/Footer';

// import Contact from './components/Contact';
// import NotFound from './components/NotFound';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path='/gutters' element={<Intro />} >
          <Route path='/gutters/residential' element={<Residential />} />
          <Route path='/gutters/commercial' element={<Commercial />} />
        </Route>
        {/* Catch-all route for 404 page */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>      
      <Footer />
    </Router>
  )
}

export default App