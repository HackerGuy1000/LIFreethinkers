import {React} from "react";

export default function Event(props) {
    return (
        <div className="container">
            <div className="imageBox">
                <img className="img" src={props.image} width="500"/>
            </div>
            <div className="eventText">
                <h1 className="eventTitle">{props.title}</h1>
                <p className="eventDescription">{props.text}</p>
            </div>
        </div>
    )
}