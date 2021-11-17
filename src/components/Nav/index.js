import React from "react";

function Nav() {
    const links = [
        {name: "about", description: "Information about who I am, where I came from, and what I'm doing now."},
        {name: "portfolio", description: "Links to web sites and applications that I have worked on."},
        {name: "contact", description: "A form to fill out to contact me."},
        {name: "resume", description: "My resume."}
    ]

    function linkSelected(name) {
        console.log(`${name} clicked`);
    }
    
    return (
        <header>
            <h2>
                <a href="/">Brian Kaufman</a>
            </h2>
            <nav>
                <ul>
                    {links.map((link) => (
                        <li className="nav-link" key={link.name}><span onClick={() => linkSelected(link.name)}>{link.name}</span></li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Nav;

// Header has nav, nav has about me, portfolio, contact, and resume