import React from "react"

export default function Header(){
    return (
        <header>
            <nav className="nav-bar">
                <img className="logo" src="react-logo.png"/>
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    );
}
