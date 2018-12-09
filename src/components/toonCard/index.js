import React from "react";
import "./style.css";
import {
    Button
} from 'reactstrap';



function ToonCard(props) {
    return (
        <div className="div">
            <Button onClick={props.onClick} className="btn card">
                <div  className="img-container">
                    <img alt={props.name} src={props.image} />
                </div>
            </Button>
        </div>
    );
}


export default ToonCard;