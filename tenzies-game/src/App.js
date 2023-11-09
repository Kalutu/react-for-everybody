import React, { useState } from "react"
import Die from "./Components/Die"
import {nanoid} from "nanoid"
import "./style.css"


export default function App() {
    const [dice, setDice] = useState(allNewDice())
    
    function allNewDice(){
        const newDice = []
        for(let i = 0; i<10; i++){
            newDice.push({
                value:  Math.ceil(Math.random()*6),
                isHeld: false,
                id: nanoid()
            })
        }
        return newDice
    }

    function rollDice(){
        setDice(allNewDice)
    }
    

    const diceElements = dice.map(die=> <Die isHeld={die.isHeld} key={die.id} value={die.value}/>)



  return (
      <main>
          <div className="dice-container">
              {diceElements}
          </div>
          <button className="roll-dice" onClick={rollDice}>Roll</button>
      </main>
  )
}