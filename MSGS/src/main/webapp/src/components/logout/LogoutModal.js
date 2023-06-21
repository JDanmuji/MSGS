import React, { useState } from "react";
import styles from "./LogoutModal.module.css";
import KakaoLogout_social from "./KakaoLogout_social";

const LogoutModal = ({ onClose }) => {
    const [kakaoLogout, setKakaoLogout] = useState(false);
    const logoutHandler = () => {
        setKakaoLogout(true);
    };
    return (
        <div className={styles["modal-background"]}>
            <div className={styles["modal-body"]}>
                <img
                    className={styles["modal-close-btn"]}
                    src={process.env.PUBLIC_URL + "/images/modal_close_btn.png"}
                    alt="closing icon"
                    onClick={onClose}
                />
                <div className={styles["confirm-text"]}>
                    <div className={styles["sub-msg"]}>
                        정말 로그아웃 하시겠습니까?
                    </div>
                </div>

                <div className={styles["modal-footer"]}>
                    <button
                        className={styles["cancel-modal-btn"]}
                        style={{ color: "black" }}
                    >
                        <span onClick={onClose}>취소</span>
                    </button>
                    <button
                        className={styles["confirm-modal-btn"]}
                        style={{ color: "white" }}
                    >
                        <span onClick={logoutHandler}>확인</span>
                    </button>
                </div>
            </div>
            {kakaoLogout ? null : <KakaoLogout_social />}
        </div>
    );
};

export default LogoutModal;
