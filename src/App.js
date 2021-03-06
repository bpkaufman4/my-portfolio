import React, { useState } from 'react';
import Nav from './components/Nav'
import './App.css';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
  const [contactSelected, setContactSelected] = useState(false);
  const [resumeSelected, setResumeSelected] = useState(false);
  const [portfolioSelected, setPortfolioSelected] = useState(false);
  const [aboutSelected, setAboutSelected] = useState(false);



  return (
    <div>
      <Nav
        setAboutSelected={setAboutSelected}
        setContactSelected={setContactSelected}
        setPortfolioSelected={setPortfolioSelected}
        setResumeSelected={setResumeSelected}></Nav>
      <main>
        {contactSelected ? (
          <Contact></Contact>
        ) : resumeSelected ? (
          <Resume></Resume>
        ) : portfolioSelected ? (
          <Portfolio></Portfolio>
        ) : aboutSelected ? (
          <About></About>
        ) : (
          <About></About>
        )}
      </main>
      <Footer></Footer>
    </div>
  );


}



export default App;
