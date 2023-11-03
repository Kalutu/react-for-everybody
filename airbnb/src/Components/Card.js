import React from "react"
import Kal from "../img/kal.png"
import Star from "../img/star.png"

export default function Card(){
    return(
        <div className="card">
            <img src={Kal} className="card-img"/>
            <div className="card-stats">
                <img src={Star} className="card-star"/>
                <span className="gray">5.0</span>
                <span className="gray">(6) *</span>
                <span className="gray">Kenya</span>
            </div>
            <p>Life Lessons with Kalutu</p>
            <p><span className="bold">From Ksh.550</span> / person</p>
            <p></p>
        </div>
    )
}