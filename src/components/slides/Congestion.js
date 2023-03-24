import React from "react";
import "./Congestion.css"

function Congestion({place_congestion, level}) {
    return (
        <div className="CongestionWide">
            <span className="PlaceTitle">
                {place_congestion} 혼잡도:
            </span>
            <span className="LevelTitle">
                {level}
            </span>
        </div>
    );
}

export default Congestion