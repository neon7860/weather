import React from "react"
import Card from "./components/Card.js"
import Nav from "./components/Nav.js"
import data from "./data"

export default function App(){
    const cards = data.map(item => {
        return(
            <Card 
            key={item.id}
            item={item}
            />
            
        )
    })
    
    return(
        <div>
            <Nav />
            {cards}
        </div>
    )
}