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
        newJoke();
    }, []);

    let jokeArray = ['Things arent always #000000 and #FFFFFF.', `What's the difference between a professional guitarist and a large pizza? The pizza can feed a family of four.`, `Just had a guy threaten to attack me with the neck of a guitar. I asked him, “Is that a fret?”`, 'What did Batman bring to the party? Just Ice!', `Why do Java Programmers wear glasses? Because they don't see sharp!`, `A guy walks into a bar and asks for 1.4 root beers. The bartender says "I'll have to charge you extra, that's a root beer float". The guy says "In that case, better make it a double."`, `Why did the programmer quit their job? Because they didn't get arrays!`,]

    const newJoke = () => {
        var randomNumber = Math.floor(Math.random() * (6));

        document.getElementById("jokeToDisplay").innerHTML = jokeArray[randomNumber]
    }

    const liveDemoText = (project) => {
        if (project.live_demo === 'No Demo Available') {
            return ('No Demo Available')
        } else {
            return ('Live Demo')
        }
    }

    return (
        <main>
            <section className="welcomePageContainer">
                {/* <h1 id="greetingMessage">Meet Your New Developer!</h1> */}
                <div className="welcomePage">
                    <div className="left-column">
                        <img id="headshotStylings" href="public/images/everettpfp.jpeg" src="/images/everettpfp.jpeg" height={400} width={400} />
                        {/* <iframe id="headshotStylings" src="public/images/everettpfp.jpeg" height={400} width={400}></iframe> */}
                    </div>
                    <div className="right-column">
                        <div id="jokeToDisplay"></div>
                    </div>
                    <br />
                    <div className="jokeButtonContainer">
                        <button id="jokeButton" onClick={newJoke}>New Joke</button>
                    </div>
                </div>
            </section>
            <section className="aboutMeContainer">
                <div className="aboutMe">
                    <h2 id='greetingMessage'>Meet Your New Developer!</h2>
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
            <section>
                <div className="mainContainer">
                    <h2>My Past Projects!</h2>
                </div>
                <div className="projectGrid">
                    <div className="projectContainer">
                        <img src="/images/OCD-Diva-Screenshot.png" width={320} height={180} />
                        <div className="projectInfo">
                            <h2>OCD-Diva</h2>
                            <p id="descriptionStyle">A conditional survey used for estimating a home cleaning service, combined with a CRM for employees</p>
                            <div className="sourceAndDemo">
                                <a href="https://www.linkedin.com/posts/everett-james-butler_hello-everyone-i-recently-had-the-opportunity-activity-7087208810108366848--nIn?utm_source=share&utm_medium=member_desktop" target="_blank" rel="noopener noreferrer">Live Demo</a>
                                <br />
                                <a href="https://github.com/mineralsun/OCDDiva-project" target="_blank" rel="noopener noreferrer">Source Code</a>
                            </div>
                        </div>
                    </div>
                    <div className="projectContainer">
                        <img src="/images/your cannaBuddy Stash pic.png" width={320} height={180} />
                        <div className="projectInfo">
                            <h2>YourCannaBuddy</h2>
                            <p id="descriptionStyle">An all-in-one cannabis tracking app where users can add, edit, and delete different cannabis products to keep track of what products they have used and favorite them!</p>
                            <div className="sourceAndDemo">
                                <a href="https://www.linkedin.com/posts/everett-james-butler_a-couple-weeks-ago-i-had-the-opportunity-activity-7077778170183094274-L8ka?utm_source=share&utm_medium=member_desktop" target="_blank" rel="noopener noreferrer">Live Demo</a>
                                <br />
                                <a href="https://github.com/mineralsun/YourCannabuddy" target="_blank" rel="noopener noreferrer">Source Code</a>
                            </div>
                        </div>
                    </div>
                    <div className="projectContainer">
                        <img src="/images/Movie-saga.png" width={320} height={180} />
                        <div className="projectInfo">
                            <h2>Movie Saga</h2>
                            <p id="descriptionStyle">A movie slide-deck where users can add movies they have seen, upload information about the movie, and view those movies</p>
                            <div className="sourceAndDemo">
                                <a href="" target="_blank" rel="noopener noreferrer">No Demo Available</a>
                                <br />
                                <a href="https://github.com/mineralsun/Everett-Movie-Sagas" target="_blank" rel="noopener noreferrer">Source Code</a>
                            </div>
                        </div>
                    </div>
                    {/* {projects.map(project => {
                    return (
                        <div className="projectContainer" key={project.id}>
                            <img src={project.thumbnail} width={320} height={180} />
                            <div className="projectInfo">
                                <h2>{project.project_name}</h2>
                                <p id="descriptionStyle">{project.project_description}</p>
                                <div className="sourceAndDemo">
                                    <a href={project.live_demo} target="_blank" rel="noopener noreferrer">{liveDemoText(project)}</a>
                                    <br />
                                    <a href={project.source_code} target="_blank" rel="noopener noreferrer">Source Code</a>
                                </div>
                            </div>
                        </div>
                    )
                })} */}
                </div>
            </section>
        </main>
    );

}

export default PortfolioMain;