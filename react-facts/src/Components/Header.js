import React from "react"
import Logo from "../img/react-logo.png"
export default function Header(){
    return (
        <header>
            <nav>
                <img src={Logo} className="nav-logo"/>
                <h3 className="logo-text">ReactFacts</h3>
                <h4 className="nav-title">React Course - Project 1</h4>
            </nav>
        </header>
    );
}
