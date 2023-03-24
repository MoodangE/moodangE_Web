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
    const setCongestionState = useSetRecoilState(congestionState);

    useEffect(() => {
        const busRef = ref(myDatabase, 'dataList/Bus');
        const congestionRef = ref(myDatabase, 'dataList/Congestion');

        onValue(busRef, (snapshot) => {
            setBusState(snapshot.val());
        });

        onValue(congestionRef, (snapshot) => {
            setCongestionState(snapshot.val());
        });
    }, [setBusState, setCongestionState]);

    const congestionInfo = useRecoilValue(congestionState)

    return (
        <Swiper className="RoutePage"
                modules={[Navigation, Pagination]}
                slidesPerView={1}
                pagination={{clickable: true}}
                direction={"horizontal"}
                loop={false}>
            <SwiperSlide>
                <SlideRoute classification={"상행"}
                            place={"정문"}
                            level={congestionInfo.MainGate}/>
            </SwiperSlide>
            <SwiperSlide>
                <SlideRoute classification={"하행"}
                            place={"AI 공학관"}
                            level={congestionInfo.AI}/>
            </SwiperSlide>
        </Swiper>
    );
}

export default SlideListPage;
