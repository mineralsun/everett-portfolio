import React, { useState, useEffect, Spotify } from 'react';
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
        <main>
            <section className="welcomePage">
                <h1>Welcome to your new developer's portfolio!</h1>
                <div className="headshotContainer">
                <img id="headshotStylings" src="public/images/everettpfp.jpeg" height={400} width={400} />
                </div>
            </section>
            <section className="aboutMeContainer">
                <div className="aboutMe">
                    <h2>About Me</h2>
                    <p>I am currently <b>available for hire!</b></p>
                    <p>Apart from work, I am a<i>passionate musician</i>, I produce my own music, play guitar, and support local musicians wherever I am!</p>
                    <p>I love <i>collaborating</i> with other driven and artistic people who want to do work that <i>matters</i> and makes a difference in this world!</p>
                    <hr />
                    <h2>My Focus</h2>
                    <p>A full-stack engineer with a preference in back-end development!</p>
                    <a target="_blank" href="public/files/Everett Butler Master Resume 2024.pdf">My Resume</a>
                    <div className="techStack">
                        <ul>
                            <li>HTML/CSS</li>
                            <li>JavaScript</li>
                            <li>SQL</li>
                            <li>C#</li>
                            <li>.NET</li>
                            <li>Python</li>
                        </ul>
                        <ul>
                            <li>React/Redux</li>
                            <li>Node</li>
                            <li>Express</li>
                            <li>PostgreSQL</li>
                            <li>AWS/S3 Bucket</li>
                            <li>Postman</li>
                        </ul>
                    </div>
                </div>
                <div className="socialLinks">
                    <iframe src="https://open.spotify.com/embed/artist/2AXbdNehSVzZjCgrBUdNtN?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0"></iframe>
                    <h2> Connect with me on LinkedIn & Github!</h2>
                    <h4>LinkedIn: <span />
                        <a target="_blank" href="https://www.linkedin.com/in/everett-james-butler/">Everett Butler</a>
                        <br />
                        Github: <span />
                        <a target="_blank" href="https://github.com/mineralsun">MineralSun</a>
                    </h4>
                </div>
            </section>
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