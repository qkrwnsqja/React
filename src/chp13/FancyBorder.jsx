import React from "react";

function FancyBorder(props) {
    return (
        <div className={'fancy-border fancy-border-' + props.color}>
            {props.children}
        </div>
    );
}

export default FancyBorder;