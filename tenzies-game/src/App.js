import React from "react"
import Die from "./Components/Die"
import "./style.css"


export default function App() {
  return (
      <main>
          <div className="dice-container">
              <Die value="1" />
              <Die value="2" />
              <Die value="3" />
              <Die value="4" />
              <Die value="5" />
              <Die value="6" />
              <Die value="1" />
              <Die value="1" />
              <Die value="1" />
              <Die value="1" />
          </div>
      </main>
  )
}