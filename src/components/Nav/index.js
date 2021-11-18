
import React from "react";

function Nav(props) {
    const {
        setAboutSelected,
        setContactSelected,
        setPortfolioSelected,
        setResumeSelected
    } = props;

    const clickContact = function() {
        setContactSelected(true);
        setResumeSelected(false);
        setPortfolioSelected(false);
        setAboutSelected(false);
      }
      const clickResume = function() {
        setContactSelected(false);
        setResumeSelected(true);
        setPortfolioSelected(false);
        setAboutSelected(false);
      }
      const clickPortfolio = function() {
        setContactSelected(false);
        setResumeSelected(false);
        setPortfolioSelected(true);
        setAboutSelected(false);
      }
      const clickAbout = function() {
        setContactSelected(false);
        setResumeSelected(false);
        setPortfolioSelected(false);
        setAboutSelected(true);
      }
    

    return (
        <header>
            <h2>
                <a href="/">Brian Kaufman</a>
            </h2>
            <nav>
                <div key="about" classlist={'link'} id={"about"} onClick={clickAbout}>About Me</div>
                <div key="portfolio" classlist={'link'} id={"portfolio"} onClick={clickPortfolio}>My Portfolio</div>
                <div key="resume" classlist={'link'} id={"resume"} onClick={clickResume}>My Resume</div>
                <div key="contact" classlist={'link'} id={"contact"} onClick={clickContact}>Contact Me</div>
            </nav>
        </header>
    );
}

export default Nav;

// Header has nav, nav has about me, portfolio, contact, and resume