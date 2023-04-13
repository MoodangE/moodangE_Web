import React from "react";
import "./Congestion.css"

function Congestion({place, levelData}) {
    const level_str = levelData
        ? Object.entries(levelData).map(([, value]) => (
            value.level
        )) : "";

    const person_num = levelData
        ? Object.entries(levelData).map(([, value]) => (
            value.person
        )) : "";

    const congestion_level = [
        {'en': 'Spare', 'ko': '여유'},
        {'en': 'General', 'ko': '보통'},
        {'en': 'Caution', 'ko': '주의'},
        {'en': 'Congestion', 'ko': '혼잡'}
    ];
    return (
        <div className="CongestionWide">
            <span className="PlaceTitle">
                {place} 혼잡도:
            </span>
            {congestion_level
                .filter((level) => (level.en === level_str[0]))
                .map((level) => (
                    <span key={level.en} className={`LevelTitle ${level.en}`}>
                        {level.ko}
                        <span className="waiting_person">&nbsp;&nbsp;&nbsp;({person_num}명)</span>
                    </span>
                ))}
        </div>
    );
}

export default Congestion