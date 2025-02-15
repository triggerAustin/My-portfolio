import React from 'react';
import Navbar from './components/navbar';
import About from './components/about';
import Projects from './components/projects';
import Contact from './components/contact';
import Footer from './components/footer';

function App() {
  return (
    <div className='bg-gray-200'>
      <Navbar />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
