import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Services from './components/Services';

// import Contact from './components/Contact';
// import NotFound from './components/NotFound';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/services" element={<Services />}/>

        {/* Catch-all route for 404 page */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>      
      <Footer />
    </Router>
  )
}

export default App