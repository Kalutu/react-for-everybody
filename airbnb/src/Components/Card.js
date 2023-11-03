import React from "react"
import Star from "../img/star.png"

export default function Card(props){
    return(
        <div className="card">
            <img src={props.img} className="card-img"/>
            <div className="card-stats">
                <img src={Star} className="card-star"/>
                <span className="gray">{props.rating}</span>
                <span className="gray">({props.reviewCount}) *</span>
                <span className="gray">{props.country}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From Ksh.{props.price}</span> / person</p>
            <p></p>
        </div>
    )
}