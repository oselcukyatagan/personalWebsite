import React from 'react';
import projectArray from "../Data/eeProjectsData"
import {useState} from "react";
import "../Styles/EEProjects.css"

function EEProjectsPage() {
    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
    const projectNumber = projectArray.length;

    const handleNextProjectClick = () => {
        currentProjectIndex < projectNumber - 1
            ? setCurrentProjectIndex((currentIndex) => currentIndex + 1)
            : console.log("No more projects")
    };

    function handlePrevProjectClick(){
        currentProjectIndex !== 0
            ? setCurrentProjectIndex(prevState => prevState - 1)
            : console.log("You're on the first project")
    }


    const currentProject = projectArray[currentProjectIndex];

    return (
        <div className="EEProjects-page-content">

            <div className="EEProjects-card">
                <img className="EEProjects-image" src={currentProject.coverImg} alt="projectCover"/>
                    <div className="EEProjects-card-text">
                        <h2>{currentProject.title}</h2>
                        <p>{currentProject.description}</p>
                        <p>{currentProject.githubLink}</p>
                    </div>
                <div className="EEProjects-buttons">
                    <button className="n-button" onClick={handlePrevProjectClick}>Previous Project</button>
                    <button className="p-button" onClick={handleNextProjectClick}>Next Project</button>
                </div>
            </div>


        </div>
    );
}

export default EEProjectsPage;