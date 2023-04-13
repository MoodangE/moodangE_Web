import React from "react";
import "./HeaderPage.css"
import "../static/fonts/font.css"
import {AiFillInfoCircle} from 'react-icons/ai';

function HeaderPage({modalShow}) {
    return (
        <div className="headLine">
            <span className="Title">
                MoodangE
            </span>
            <span className="InfoButton">
                <AiFillInfoCircle className="InfoIcon" onClick={modalShow}/>
            </span>
        </div>
    )
}

export default HeaderPage;