import React from "react"
import ReactDOM from "react-dom"
import Info from "./Info.js"
import About from "./About.js"
import Interests from "./Interests.js"
import Footer from "./Footer.js"

export default function App(){
    return(
        <div className="Container">
        <Info />
        <About />
        <Interests />
        <Footer />
        </div>
    )
}
