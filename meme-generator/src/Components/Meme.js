import React, { useState } from "react";
import memeData from "../memedata"

export default function Meme(){
    const [meme, setMeme] = useState({
                                topText : "",
                                bottomText : "",
                                imageURL : "http://i.imgflip.com/1bij.jpg"
                            })


    const [allMemeImages, setAllMemeImages] = useState(memeData)

    function getMemeImage(){
        const memesArray = allMemeImages.data.memes
        const randomNumber =  Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme=>{
            return {
                ...prevMeme,
                imageURL : url
            }
        })
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
            <div className="meme">
                <img src={meme.imageURL} className="meme--image"/>
                <h2 className="meme--text top">One does not simply</h2>
                <h2 className="meme--text bottom">Walk into Mordor</h2>
            </div>
           
        </main> 
    )
}