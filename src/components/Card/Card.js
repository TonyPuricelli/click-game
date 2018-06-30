import React from "react";
import "./Card.css";

//pass the image into each card so all 12 are rendered
const Card = props => (
    <div className="card hover">
        <div className="img-container" onClick={props.imageClick}>
            <img alt={props.name} src={props.image} id={props.id}/>
        </div>
    </div>
  );

export default Card;