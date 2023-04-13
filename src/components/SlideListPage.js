import React, {useEffect} from "react";
import "./SlideListPage.css"
import {myDatabase} from '../firebase';
import {ref, onValue} from 'firebase/database';
import {busState, congestionState} from "./dataList";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination} from 'swiper';
import "swiper/css";
import "swiper/css/pagination";
import SlideRoute from "./slides/SlideRoute";
import {useRecoilValue, useSetRecoilState} from "recoil";

function SlideListPage() {
    const setBusState = useSetRecoilState(busState);
    useEffect(() => {
        const busRef = ref(myDatabase, 'dataList/Bus');
        onValue(busRef, (snapshot) => {
            const busData = snapshot.val();
            const upBusData = [];
            const downBusData = [];
            // up 상태와 down 상태가 true 인걸 분류
            Object.entries(busData).forEach(([key, value]) => {
                if (value.up && value.power) {
                    upBusData.push({id: key, ...value});
                }
                if (value.down && value.power) {
                    downBusData.push({id: key, ...value});
                }
            });
            setBusState({up: upBusData, down: downBusData});
        });
    }, [setBusState]);

    const setCongestionState = useSetRecoilState(congestionState);
    useEffect(() => {
        const congestionRef = ref(myDatabase, 'dataList/Congestion');
        onValue(congestionRef, (snapshot) => {
            const congestionData = snapshot.val();
            const mainGateData = [];
            const AIData = [];
            Object.entries(congestionData).forEach(([key, value]) => {
                if (key === 'MainGate') {
                    mainGateData.push({id: key, ...value});
                }
                if (key === 'AI') {
                    AIData.push({id: key, ...value});
                }
            });
            setCongestionState({mainGate: mainGateData, ai: AIData});
        });
    }, [setCongestionState]);

    const congestionInfo = useRecoilValue(congestionState)
    const busInfo = useRecoilValue(busState)

    return (
        <Swiper className="RoutePage"
                modules={[Navigation, Pagination]}
                slidesPerView={1}
                pagination={{clickable: true}}
                direction={"horizontal"}
                loop={false}>
            <SwiperSlide>
                <SlideRoute direction={"up"}
                            place={"정문"}
                            levelData={congestionInfo.mainGate}
                            busData={busInfo.up}/>
            </SwiperSlide>
            <SwiperSlide>
                <SlideRoute direction={"down"}
                            place={"AI 공학관"}
                            levelData={congestionInfo.ai}
                            busData={busInfo.down}/>
            </SwiperSlide>
        </Swiper>
    );
}

export default SlideListPage;
