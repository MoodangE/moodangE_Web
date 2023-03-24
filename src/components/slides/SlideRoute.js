import React from "react";
import "./SlideRoute.css";
import CurrentPath from "./CurrentPath";
import Congestion from "./Congestion";
import Classification from "./Classification"

function SlideRoute({classification, place, level}) {
    return (
        <div className="RoutePage">
            <Classification title={classification}/>
            <CurrentPath/>
            <Congestion place_congestion={place}
                        level={level}/>
        </div>
    );
}

export default SlideRoute;