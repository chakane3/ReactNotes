import React from "react"
import logo from "./Images/Logo.png"

export default function Header() {
    return(
        <div className="header">
            <img src={logo} alt="meme logo" className="header--logo"/>
            <h1 className="header--title">React Course - Project 3</h1>
        </div>
    )
}

