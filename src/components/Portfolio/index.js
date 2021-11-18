import React from "react";

function Portfolio() {

    const projects = [
        {name:"Coding Quiz",url:"https://bpkaufman4.github.io/coding-quiz/", image:"coding-quiz.png", key:1},
        {name:"Weather Dashboard", url:"https://bpkaufman4.github.io/weather-dashboard/", image:"weather-dashboard.png", key:2},
        {name:"Password Generator", url:"https://bpkaufman4.github.io/password-generator/", image:"password-generator.png", key:3},
        {name:"Old Profile", url:"https://bpkaufman4.github.io/challenge-2/", image:"old-profile.png", key:4},
        {name:"Pokémon Trading Post", url:"https://pokemon-trading-post.herokuapp.com/", image:"pokemon-trading-post.png", key:5},
        {name:"Covid Risk Tracker", url:"https://bpkaufman4.github.io/Group-2-project-1/", image:"covid-risk-tracker.png", key:6}
    ]

    return (
        <section className="my-5">
            {projects.map((project) => (
                <>
                    <div id="project">
                        <h3><a href={project.url}>{project.name}</a></h3>
                        <a href={project.url}><img alt={`screenshot of the ${project.name} homepage`} src={project.image}/></a>
                    </div>
                </>
            ))}
        </section>
    );
}

export default Portfolio;