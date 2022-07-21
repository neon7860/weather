import React from "react"


export default function Card(props){
    return(
        <div className="card">
            <img className="card--img" src={`./images/${props.item.imageUrl}`}></img>
            <div className="card--info">
                <div className="card--location">
                    <img className="card--icon" src="./images/Location.png"></img>
                    <p className="country">{props.item.location}</p>
                    <p><a href={props.item.googleMapsUrl} className="card--link">View on Google Maps</a></p>
                </div>
                <h2 className="card--title">{props.item.title}</h2>
                <p><b>{props.item.startDate} - {props.item.endDate}</b></p>
                <p className="card--caption">{props.item.description}</p>
            </div>
        </div>
    )
}