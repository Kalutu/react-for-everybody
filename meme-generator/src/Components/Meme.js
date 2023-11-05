import React, { useState } from "react";
import memeData from "../memedata"

export default function Meme(){
    const [imageURL, setImageURL] = useState('')

    function getMemeImage(){
        const memesArray = memeData.data.memes
        const randomNumber =  Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setImageURL(url)
    }

    return(
        <main>
            <div className="form">
                <input 
                    type="text" 
                    placeholder="Top text"
                    className="form--input"
                />

                <input 
                    type="text" 
                    placeholder="Bottom text"
                    className="form--input"
                />

                <button 
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <img src={imageURL} />
        </main> 
    )
}