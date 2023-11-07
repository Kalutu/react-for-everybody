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

    function handleChange(e){
        const {name, value} = e.target
        setMeme(prevMeme=>{
            return {
                ...prevMeme,
                [name] : value
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
                    onChange={handleChange}
                    value={meme.topText}
                    name="topText"
                />

                <input 
                    type="text" 
                    placeholder="Bottom text"
                    className="form--input"
                    onChange={handleChange}
                    value={meme.bottomText}
                    name="bottomText"
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
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
           
        </main> 
    )
}