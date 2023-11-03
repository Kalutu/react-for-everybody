import React from "react"
import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"
import Card from "./Components/Card"
import Kal from "./img/kal.png"
import "./style.css"

export default function App(){
    return (
        <>
            <Navbar/>
            <Hero/>
            <Card
                img = {Kal}
                rating = {5.0}
                reviewCount = {6}
                country = "Kenya"
                title = "Life lessons with Kalutu"
                price = {136}
            />
        </>
    )
}