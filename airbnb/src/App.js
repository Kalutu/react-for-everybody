import React from "react"
import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"
import Card from "./Components/Card"
import data from "./data"
import "./style.css"

export default function App(){
    const cards = data.map(item =>
        <Card 
            key={item.id}
            {...item}
        />
    )
    
    return (
        <>
            <Navbar/>
            <Hero/>
            <section className="cards-list">
                {cards}
            </section>
        </>
    )
}