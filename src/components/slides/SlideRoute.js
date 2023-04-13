import React from "react";
import "./SlideRoute.css";
import CurrentPath from "./CurrentPath";
import Congestion from "./Congestion";
import Classification from "./Classification"

function SlideRoute({direction, place, levelData, busData}) {
    return (
        <div className="RoutePage">
            <Classification title={direction}/>
            <CurrentPath busData={busData} direction={direction}/>
            <Congestion place={place}
                        levelData={levelData}/>
        </div>
    );
}

export default SlideRoute;