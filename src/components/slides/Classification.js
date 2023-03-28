import React from "react";
import "./Classification.css"

function Classification({title}){
    return(
        <div className="ClassificationTitle">
            {title === "up" ? "상향" : "하향"}
        </div>
    );
}
export default Classification