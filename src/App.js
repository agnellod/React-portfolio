import React, {useState} from 'react';
import Header from './components/header';
import About from './components/about';
import Footer from './components/footer';
import Contact from './components/contact';
import Portfolio from './components/portfolio';
import Resume from './components/resume';
import './App.css';



function App() {
  const [activePage, setPage] = useState('about');
  

  const handleNavigation = (section) => {
    setPage(section);
  };

  return (
    <div className="App">
      <Header activePage={activePage} handleNavigation={handleNavigation} />
      {activePage === "about" && <About />}
      {activePage === "portfolio" && <Portfolio />}
      {activePage === "contact" && <Contact />}
      {activePage === "resume" && <Resume />}
      <Footer />
    </div>
  );
}


export default App;
