import React from "react"

export default function MainContent(){
    return (
        <div className="main-content">
            <h1>Fun Facts about React</h1>
            <ul>
                <li>Was first relead in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100k stars on Github</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprose apps, including mobile apps</li>
            </ul>
            <img className="fun" src="fun.jpg"/>
        </div>
    );
}