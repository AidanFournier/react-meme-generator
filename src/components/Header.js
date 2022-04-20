import React from "react"
import TrollFace from "../images/troll-face.png"

export default function Header() {
    return (
        <header>
            <img src= {TrollFace} alt="Meme troll face" className="header--img" />
            <h2>Meme Generator</h2>
        </header>
    )
}