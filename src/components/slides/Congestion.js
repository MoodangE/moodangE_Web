import React from "react";
import "./Congestion.css"

function Congestion({place_congestion, level}) {
    const congestion_level = [
        {'en': 'Spare', 'ko': '여유'},
        {'en': 'General', 'ko': '보통'},
        {'en': 'Caution', 'ko': '주의'},
        {'en': 'Congestion', 'ko': '혼잡'}
    ];
    return (
        <div className="CongestionWide">
            <span className="PlaceTitle">
                {place_congestion} 혼잡도:
            </span>
            {congestion_level
                .filter((levels) => (levels.en === level))
                .map((levels) => (
                    <span key={levels.en} className={`LevelTitle ${levels.en}`}>
                        {levels.ko}
                    </span>
                ))}
        </div>
    );
}

export default Congestion