import React from "react";
import "./CurrentPath.css"
import {ReactComponent as MoodangE} from "../../static/img/MoodangE.svg"

function CurrentPath({busData, direction}) {

    const busDataList = busData
        ? Object.entries(busData).map(([, value]) => ({
            busId: value.id,
            location: value.location,
            type: direction
        })) : [];

    const up_location_ko = [
        {'ko': '정문', 'row_num': '1'},
        {'ko': '터널', 'row_num': '2'},
        {'ko': '교육대학원', 'row_num': '3'},
        {'ko': '중앙도서관', 'row_num': '4'},
        {'ko': '학생회관', 'row_num': '5'},
        {'ko': 'AI공학관', 'row_num': '7'}
    ]
    const up_location_en = ['MainGate', 'Education', 'Student', 'AI']
    const down_location_ko = [
        {'ko': 'AI공학관', 'row_num': '1'},
        {'ko': '중앙도서관', 'row_num': '3'},
        {'ko': '교육대학원', 'row_num': '4'},
        {'ko': '예술대학1', 'row_num': '5'},
        {'ko': '정문', 'row_num': '7'}]
    const down_location_en = ['AI', 'MainLib', 'Art', 'MainGate']
    const show_location_ko = direction === "up" ? up_location_ko : down_location_ko
    const show_location_en = direction === "up" ? up_location_en : down_location_en

    return (
        <div className="RoutePathWide">
            <div className="imageSpace">
                {busDataList && busDataList.map((bus) => (
                    <MoodangE key={bus.busId} className={`${bus.type}_${bus.location}`}/>
                ))}
            </div>
            <div className="busLineSpace">
                <div className="busLine"/>
                {show_location_en.map((list, index) => (
                    <div key={index} className={`${direction}_${list} circle_gray`}/>
                ))}
                {busDataList && busDataList.map((bus, index) => (
                    <div key={`bus_${index}`} id='circle_red' className={`${bus.type}_${bus.location}`}/>
                ))}
            </div>
            <div className="LocationTitleSpace">
                {show_location_ko.map((text) => (
                    <div key={text.ko} className={`StationTitle Station grid_${text.row_num}`}>
                        {text.ko}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CurrentPath