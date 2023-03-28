import React from "react";
import "./SlideRoute.css";
import CurrentPath from "./CurrentPath";
import Congestion from "./Congestion";
import Classification from "./Classification"

function SlideRoute({direction, place, level, busData}) {
    return (
        <div className="RoutePage">
            <Classification title={direction}/>
            <CurrentPath busData={busData} direction={direction}/>
            <Congestion place_congestion={place}
                        level={level}/>
        </div>
    );
}

export default SlideRoute;