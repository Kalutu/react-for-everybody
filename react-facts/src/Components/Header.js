import React from "react"
import Logo from "../img/react-logo.png"
export default function Header(){
    return (
        <header>
            <nav className="nav-bar">
                <img className="logo" src={Logo}/>
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    );
}
