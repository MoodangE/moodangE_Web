import Header from "./components/HeaderPage"
import Slide from "./components/SlideListPage"
import {useEffect, useState} from "react";
import {BrowserView, MobileView} from "react-device-detect";
import Modal from "./components/modal/Modal";

function App() {
    // 모바일 100vh 스크롤 생기는 문제 해결
    function setScreenSize() {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty("--vh", `${vh}px`); //"--vh"라는 속성으로 정의해준다.
    }

    useEffect(() => {
        setScreenSize();
    });

    const browserStyle = {
        height: '100vh',
        width: '100vm',
        placeItems: 'center',
        display: 'grid'
    }
    const browserTextStyle = {
        fontFamily: '\'JejuGothic\', cursive',
        fontSize: '3vh'
    }

    const [modalOpen, setModalOpen] = useState(false)
    const modalShow = () => {
        setModalOpen(true);
        document.body.style.overflow = "hidden";
    };

    return (
        <div className="App">
            <BrowserView style={browserStyle}>
                <div style={browserTextStyle}>Please connect to mobile</div>
            </BrowserView>
            <MobileView>
            {modalOpen && <Modal setModalOpen={setModalOpen}/>}
            <Header modalShow={modalShow}/>
            <Slide/>
            </MobileView>
        </div>
    );
}

export default App;