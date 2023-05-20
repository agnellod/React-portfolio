import React, {useState} from 'react';
import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import './App.css';



function App() {
  const [page, setPage] = useState('about');
  function PageToRender() {
    switch (page) {
      case 'about':
        return <About/>
      case 'contact':
        return <Contact/>
      case 'portfolio':
        return <Portfolio/>
      case 'resume':
        return <Resume/>

      default:
        return <div>
          default
        </div>
      }
  }
  return (
    <div>
      <Header page = {page} setPage = {setPage}/>
      <PageToRender/>
      <Footer/>
    </div>
  );
}

export default App;
