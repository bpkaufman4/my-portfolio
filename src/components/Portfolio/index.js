import React from "react";

function Portfolio() {

    const projects = [
        {name:"Coding Quiz",url:"https://bpkaufman4.github.io/coding-quiz/", image:"coding-quiz.png", key:1},
        {name:"Weather Dashboard", url:"https://bpkaufman4.github.io/weather-dashboard/", image:"weather-dashboard.png", key:2},
        {name:"Password Generator", url:"https://bpkaufman4.github.io/password-generator/", image:"password-generator.png", key:3},
        {name:"Old Profile", url:"https://bpkaufman4.github.io/challenge-2/", image:"old-profile.png", key:4}
    ]

    return (
        <section className="my-5">
            {projects.map((project) => (
                <>
                    <div>
                        <h2><a href={project.url}>{project.name}</a></h2>
                    </div>
                    <a href={project.url}><img alt="screen shot of the project" src={project.image}/></a>
                </>
            ))}
        </section>
    );
}

export default Portfolio;



// https://bpkaufman4.github.io/coding-quiz/
// 
// 
// https://bpkaufman4.github.io/challenge-2/