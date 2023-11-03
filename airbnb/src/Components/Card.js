import React from "react"

export default function Card(props){
    return(
        <div className="card">
            <img src={`img/${props.img}`} className="card-img"/>
            <div className="card-stats">
                <img src="img/star.png" className="card-star"/>
                <span className="gray">{props.rating}</span>
                <span className="gray">({props.reviewCount}) *</span>
                <span className="gray">{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From Ksh.{props.price}</span> / person</p>
            <p></p>
        </div>
    )
}