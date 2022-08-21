import React from "react"
import MemesData from "../MemesData"

export default function Meme() {


    const getMemeImage = (event) => {
        let randomIndex = Math.floor(Math.random() * MemesData.data.memes.length)
        const newData = MemesData.data.memes[randomIndex].url
        console.log(newData)
        
        event.preventDefault()
        
    }
    function logMouseOver() {
        console.log("You hovered over the button")
    }

    return(
        
        <div>
            <form className="memeForm">
                <input className="memeform--input1" type="text" placeholder="top text"></input>
                <input className="memeform--input2" type="text" placeholder="bottom text"></input>
                <button className="memeform--submit" type="submit" onClick={getMemeImage} onMouseOver={logMouseOver}>Get a new meme image 🖼</button>
            </form>
        </div>
    )
}