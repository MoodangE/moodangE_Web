import React from 'react';
import "./Modal.css"
import {ReactComponent as MoodangE18} from "../../static/img/MoodangE18.svg"
import {ReactComponent as MoodangE23} from "../../static/img/MoodangE23.svg";

function Modal({setModalOpen}) {
    // 모달 끄기
    const closeModal = () => {
        setModalOpen(false);
        document.body.style.overflow = "unset";
    };

    const movement_data = [
        {key: '탄력 운행', list: ['30분 동안 탄력적으로 운행', '8 : 30 ~ 9 : 00']},
        {key: '정기 운행', list: ['10분 간격으로 정기적 운행', '9 : 00 ~ 17 : 00']},
        {key: '운행 중지', list: ['점심시간 (12 : 00 ~13 : 00)', '우천 & 방학기간']}]
    const congestion_data = [
        {color: '#3AB0FF', data: '여유 : 14명 미만'},
        {color: '#53B651', data: '보통 : 14 ~ 17명'},
        {color: '#EBC854', data: '주의 : 18 ~ 22명'},
        {color: '#C84A3F', data: '혼잡 : 22명 초과'}]

    return (
        // modal_ground 즉 modal 뒤 배경을 누르면 닫히는 이벤트
        <div className="modal_ground" onClick={closeModal}>
            {/*(e) => e.stopPropagation() 는 modal 창은 눌러도 닫히지 않도록 modal_ground action 을 제한*/}
            <div className="modal_container"
                 onClick={(e) => e.stopPropagation()}>
                <div className="modal_title">
                    가천대 무당이 알리미
                </div>

                <div className="modal_main_box">
                    <div className="modal_sub_title">
                        운행 관련
                    </div>
                    {movement_data.map((data, index) => (
                        <div key={`move_${index}`} className="modal_sub_box">
                            <span key={`cate_${index}`} className="modal_sub_category">
                                {data.key}
                            </span>
                            <span className="modal_sub_data">
                                {data.list.map((sub_data, index) => (
                                    <div key={`cate_data_${index}`}>-&nbsp;&nbsp;{sub_data}</div>
                                ))}
                            </span>
                        </div>
                    ))}
                </div>

                <div className="modal_main_box">
                    <div className="modal_sub_title">
                        탑승 인원 & 혼잡도 관련
                    </div>
                    <div className="modal_sub_box">
                        <span className="modal_bus_info" style={{paddingLeft: 4 + 'vw'}}>
                            <MoodangE18 width="11vh"/>
                            <div>18인승</div>
                        </span>
                        <span className="modal_bus_info" style={{paddingRight: 4 + 'vw'}}>
                            <MoodangE23 width="12vh"/>
                            <div>23인승</div>
                        </span>

                    </div>
                    <div className="modal_sub_box modal_congestion_box">
                        {congestion_data.map((data, index) => (
                            <div className="modal_congestion_info"
                                 style={{gridRow: `${index / 2 + 1}`, gridColumn: `${index % 2 + 1}`}}>
                                <div className='modal_circle'
                                     style={{background: `${data.color}`}}/>
                                <span className='modal_congestion'>
                                    {data.data}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                <button className="close" onClick={closeModal}>
                    닫기
                </button>
            </div>
        </div>
    );
}

export default Modal