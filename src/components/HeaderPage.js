import React from "react";
import "./HeaderPage.css"
import "../static/fonts/font.css"
import InfoButton from "../static/img/InfoButton";

function HeaderPage() {
    return (
        <div className="headLine">
            <span className="Title">
                MoodangE
            </span>
            <InfoButton className="InfoIcon"/>
        </div>
    )
}

export default HeaderPage;