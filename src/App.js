
import './App.css';
import Navbar from './Navbar';
import Home from './pages/Home';
import { About } from './pages/About';
import { Contact }from './pages/Contact';
import { BackToTopButton } from './components/BackToTopButton';
import Footer from './Footer';
import { Route, Routes } from "react-router-dom";

const App = () => {

  return (
    <>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <BackToTopButton />
      <Footer />
    </>
    
    
  )
}

export default App;
