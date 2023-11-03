import React from "react"
import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"
import Card from "./Components/Card"
import "./style.css"

export default function App(){
    return (
        <>
            <Navbar/>
            <Hero/>
            <Card/>
        </>
    )
}