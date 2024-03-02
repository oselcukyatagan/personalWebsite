import React from 'react';
import { Link } from 'react-router-dom'
function Header() {

    return (
        <div className="header">
            <div className="logoHolder">
                <h1>MyWebsite</h1>
            </div>
            <div>
               <ul className="header-content">
                   <Link to="/" className="header-link">Home</Link>
                   <Link to="/" className="header-link">EE Projects</Link>
                   <Link to="/" className="header-link">Web Projects</Link>
                   <Link to="/" className="header-link">Interests</Link>
                   <Link to="/contact" className="header-link">Contact</Link>
               </ul>
            </div>
        </div>
    );
}
/*
<ul className="header-content">
    <li><Link to={}></Link></li>
    <li>Projects</li>
    <li>Interests</li>
    <li>Socials</li>
    <li>Contact</li>
</ul>
*/
export default Header;