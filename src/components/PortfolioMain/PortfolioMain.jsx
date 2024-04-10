import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './PortfolioMain.css';

function PortfolioMain() {
    const dispatch = useDispatch();
    const history = useHistory();
    const projects = useSelector(store => store.projectList);

    useEffect(() => {
        dispatch({ type: 'FETCH_PROJECTS' });
    }, []);

    return (
        <main className="mainPage">
            <h1>Welcome to your new developer's portfolio!</h1>
            <h5>Everett is the best coder!</h5>
            <div className="mainContainer">
                <h2>My Past Projects!</h2>
            </div>
            <section className="projectGrid">
                {projects.map(project => {
                    return (
                        <div className="projectContainer" key={project.id}>
                            <img src={project.thumbnail} width={320} height={180} />
                            <div className="projectInfo">
                                <h2>{project.project_name}</h2>
                                <p id="descriptionStyle">{project.project_description}</p>
                                <div className="sourceAndDemo">
                                    <a href={project.live_demo} target="_blank" rel="noopener noreferrer">Live Demo</a>
                                    <br />
                                    <a href={project.source_code} target="_blank" rel="noopener noreferrer">Source Code</a>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </section>
        </main>
    );

}

export default PortfolioMain;