// import logo from './logo.svg';
import './App.css';

import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Footer from './Components/Footer/Footer';
import Projects from './Components/Projects/Projects';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      
      <div className= 'page-body'>

        
        <h2 style={{textAlign: 'start', marginLeft: '20px'}} >About Me</h2>
        
        <div className='about-me'>        
        <p>I'm an aspiring web developer and student of UofT Coding Bootcamp. My skills consist of react, javascript, HTML, and CSSS </p>               
        </div>
        
        <h2 className='mb-4' style={{textAlign: 'start', marginLeft: '20px'}}>Projects</h2>
        <div className='project-container'>
          
          <Projects />
        </div>     
        <Footer />
      </div>     
  </div>
  );
}

export default App;
