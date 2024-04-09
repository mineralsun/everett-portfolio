import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './PortfolioMain.css';

function PortfolioMain() {
    const dispatch = useDispatch();
    const history = useHistory();
    const projects = useSelector(store => store.projectList);

    useEffect(() => {
        dispatch({ type: 'FETCH_PROJECTS'});
    }, []);

    return (
        <main>
            <h1>Welcome to your new developer's portfolio!</h1>
            <h5>Everett is the best coder!</h5>
            <div className="container">
                {projects.map(project => {
                    return (
                        <div className="projectGrid" key={project.id}>
                            <div className="projectContainer">
                            <img className="projecThumbnailContainer" src={project.thumbnail} />
                            <h2>{project.project_name}</h2>
                            <br />
                            <p>{project.project_description}</p>
                            <br />
                            <a href={project.live_demo} target="_blank" rel="noopener noreferrer">Live Demo</a>
                            <br />
                            <a href={project.source_code} target="_blank" rel="noopener noreferrer">Source Code</a>
                            </div>
                        </div>
                    )
                })}
            </div>
        </main>
    );

}

export default PortfolioMain;