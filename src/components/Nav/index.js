import React from "react";

function Nav(props) {
    const {
        setAboutSelected,
        setContactSelected,
        setPortfolioSelected,
        setResumeSelected
    } = props;

    var aboutEl = document.getElementById('about');
    var portfolioEl = document.getElementById('portfolio');
    var contactEl = document.getElementById('contact');
    var resumeEl = document.getElementById('resume');

    var activate = function(activeLink) {
        activeLink.classList.add('active');
    };

    var inactive = function(link1, link2, link3) {
        link1.classList.remove('active');
        link2.classList.remove('active');
        link3.classList.remove('active');
    }

    const clickContact = function() {
        setContactSelected(true);
        setResumeSelected(false);
        setPortfolioSelected(false);
        setAboutSelected(false);
        activate(contactEl);
        inactive(resumeEl, portfolioEl, aboutEl);
      }
      const clickResume = function() {
        setContactSelected(false);
        setResumeSelected(true);
        setPortfolioSelected(false);
        setAboutSelected(false);
        activate(resumeEl);
        inactive(contactEl, portfolioEl, aboutEl);
      }
      const clickPortfolio = function() {
        setContactSelected(false);
        setResumeSelected(false);
        setPortfolioSelected(true);
        setAboutSelected(false);
        activate(portfolioEl);
        inactive(resumeEl, contactEl, aboutEl);
      }
      const clickAbout = function() {
        setContactSelected(false);
        setResumeSelected(false);
        setPortfolioSelected(false);
        setAboutSelected(true);
        activate(aboutEl);
        inactive(resumeEl, portfolioEl, contactEl);
      }
    

    return (
        <header>
            <h2>
                <a href="/">Brian Kaufman</a>
            </h2>
            <nav>
                <ul>
                    <li><span class={'link active'} id={"about"} onClick={clickAbout}>About Me</span></li>
                    <li><span class={'link'} id={"portfolio"} onClick={clickPortfolio}>My Portfolio</span></li>
                    <li><span class={'link'} id={"resume"} onClick={clickResume}>My Resume</span></li>
                    <li><span class={'link'} id={"contact"} onClick={clickContact}>Contact Me</span></li>
                </ul>
            </nav>
        </header>
    );
}

export default Nav;

// Header has nav, nav has about me, portfolio, contact, and resume