import React from "react";
import FancyBorder from "./FancyBorder";

function Dialog(props) {
    return (

        <FancyBorder color={props.color}>
            <h1 className="dialog-title">
                {props.title}
            </h1>
            <p className="dialog-message">
                {props.message}
            </p>
        </FancyBorder>
    );
}

export default Dialog;