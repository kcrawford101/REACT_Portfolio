// import logo from './logo.svg';
import './App.css';
import displaypic from './images/My_Display_Pic_25.jpg'

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
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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
