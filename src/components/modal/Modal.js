import React from 'react';
import "./Modal.css"

function Modal({setModalOpen}) {
    // 모달 끄기
    const closeModal = () => {
        setModalOpen(false);
        document.body.style.overflow = "unset";
    };

    return (
        // modal_ground 즉 modal 뒤 배경을 누르면 닫히는 이벤트
        <div className="modal_ground" onClick={closeModal}>
            {/*(e) => e.stopPropagation() 는 modal 창은 눌러도 닫히지 않도록 modal_ground action 을 제한*/}
            <div className="modal_container"
                 onClick={(e) => e.stopPropagation()}>
                <button className="close" onClick={closeModal}>
                    닫기
                </button>
                <div className="modal_title">
                    가천대 무당이 알리미
                </div>
            </div>
        </div>
    );
}

export default Modal