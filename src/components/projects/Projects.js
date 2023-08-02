import React from 'react';
import DisplayProject from '.Project.js';

const Projects = () => {
    let projects = []
    return ( 
        <div className="aboutme-container">
        <div className="pagename-container">
            <h1> Projects</h1>
        </div>
        <div className="aboutinfo-container">
            <div className="aboutinfo-inner-container">
                <div className="list-container">
                    <ul>
                        {projects.map((project) => {
                            return (
                                <DisplayProject
                                    key={project.id}
                                    id={project.id}
                                    name={project.name}
                                    link={project.link}
                                    description={project.description}
                                    image={project.image}
                                />
                            )
                        })}
                    </ul>
                </div>
            </div>
            <div className="aboutinfo-inner-container">
                <div className="list-container">
                    <ul>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Projects;