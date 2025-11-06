import React from "react"; 7.9k (gzipped: 3.1k)
import './card.css';

function Card(props){
    return(
        <div className = "card">
            <img src = {props.image} alt={props.title} className= "card-image"
            <h3 className= "card-title"> {props.title}</h3>
            <p className-q  
        </div>
    )
}