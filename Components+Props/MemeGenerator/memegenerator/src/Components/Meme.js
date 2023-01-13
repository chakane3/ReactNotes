import React from "react"
import MemesData from "../MemesData"
import placeholder from "./Images/placeholder.png"
export default function Meme() {

    const [memeImage, setMemeImage] = React.useState(placeholder)

    // function to grab an img url from MemeData.js
    const getMemeImage = (event) => {
        let randomIndex = Math.floor(Math.random() * MemesData.data.memes.length)
        const imgURL = MemesData.data.memes[randomIndex].url
        console.log(`${imgURL.toString()}`)
        setMemeImage(imgURL)
        event.preventDefault()
        
    }



    return(
        
        <div className="mainDiv">
            <form className="memeForm">
                <input className="memeform--input1" type="text" placeholder="top text"></input>
                <input className="memeform--input2" type="text" placeholder="bottom text"></input>
                <button className="memeform--submit" type="submit" onClick={getMemeImage}>Get a new meme image 🖼</button>           
            </form>
            <div className="memeImg">
                <img className="memeImg" src={memeImage} alt={'this is a meme'}></img>
            </div>
        </div>
    )
}