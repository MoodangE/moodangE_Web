import React from "react";
import "./CurrentPath.css"
import {ReactComponent as MoodangE} from "../../static/img/MoodangE.svg"

function CurrentPath({busData, direction}) {
    const busDataList = busData
        ? Object.entries(busData).map(([busId, busInfo]) => ({
            busId: busId,
            location: busInfo.location,
            type: direction
        })) : [];

    const up_location = ['정문', '교육대학원', '학생회관', 'AI공학관']
    const up_location_en = ['MainGate', 'Education', 'Student', 'AI']
    const down_location = ['AI공학관', '중앙도서관', '예술대학1', '정문']
    const down_location_en = ['AI', 'MainLib', 'Art', 'MainGate']
    const show_location = direction === "up" ? up_location : down_location
    const show_location_en = direction === "up" ? up_location_en : down_location_en

    return (
        <div className="RoutePathWide">
            <div className="imageSpace">
                {busDataList && busDataList.map((bus) => (
                    <MoodangE key={bus.busId}
                              className={`${bus.type}_${bus.location}`}/>
                ))}
            </div>
            <div className="busLineSpace">
                <div className="busLine"/>
                {show_location_en.map((list) => (
                    <div className={`${direction}_${list} circle_gray`}/>
                ))}
                {busDataList && busDataList.map((bus) => (
                    <div id='circle_red' className={`${bus.type}_${bus.location}`}/>
                ))}
            </div>
            <div className="LocationTitleSpace">
                {show_location.map((text, index) => (
                    <div key={text} className={`StationTitle Station_${index}`}>{text}</div>
                ))}
            </div>
        </div>
    );
}

export default CurrentPath