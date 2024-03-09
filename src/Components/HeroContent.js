import React from 'react';
import {Link} from "react-router-dom";


function HeroContent() {

    const handleClick = () => {
        return (console.log("asd"))
    }

    return (
        <div>
            <div className="hero-content">
                <div className="hero-text">
                    <h1>I'm Selçuk, Electrical Engineering Student & Web Developer</h1>
                    <p className="hero-p">I'm passionate about electronics and coding. Always looking for opportunities to make myself better.
                    Feel free to contact me.
                    </p>
                </div>
                <Link style={{ paddingTop: "2.5rem" , pointerEvents: "none"}} to="/EEProjects">
                <button className="hero-button" onClick={handleClick}>See my work.</button>
                </Link>
            </div>
            </div>
    );
}

export default HeroContent;