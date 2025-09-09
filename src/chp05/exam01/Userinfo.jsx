import React from "react";
import Avatar from "./Avatar";
import './Userinfo.css';

function Userinfo(props) {
    return(
        <div className="user-info">
            <Avatar user={props.user}/>
            <div className="user-info-name">
                {props.user.name}
                </div>
            </div>
    );
}

export default Userinfo;