import React, { useState } from "react";

import styles from "./LocReview.module.css";
import ReviewImg from "./ReviewImg";
import StarShow from "../../components/common/StarShow";

const ReviewItem = (props) => {
    const item = props.item;

    const [isReviewOpen, setIsReviewOpen] = useState(false);

    // 텍스트 130자까지만 출력
    const reviewText =
        item.reviewText.length > 130
            ? item.reviewText.substring(0, 130) + "..."
            : item.reviewText;

    const reviewOpenClickHandler = () => {
        setIsReviewOpen(!isReviewOpen);
    };

    // tripImg의 요소길이 반환 → 이미지 개수에 따른 CSS 조정
    const length = item.reviewImg.length;

    return (
        <li className={styles["review-item"]}>
            <div className={styles["review-user"]}>
                <img
                    className={styles["review-item-id-img"]}
                    src={item.userImg}
                    alt="userImg"
                />
                <div>
                    <span className={styles["review-user-name"]}>
                        {item.userName}
                    </span>
                    <span className={styles["review-user-info"]}>
                        {item.userReviewCnt}개의 리뷰
                    </span>
                </div>
            </div>

            <StarShow rating={item.stars} height={"1.4rem"} />

            <span className={styles["review-trip-date"]}>
                {item.tripDate} 여행
            </span>

            {/* 리뷰 텍스트 */}
            <div className={styles["review-item-text"]}>
                {isReviewOpen ? item.reviewText : reviewText}
                <button
                    className={styles["review-detail-btn"]}
                    onClick={reviewOpenClickHandler}
                >
                    {item.reviewText.length > 130 && (
                        <span>{isReviewOpen ? "접기" : "더보기"}</span>
                    )}

                    {/* <img className={styles["new-window-icon"]}
                        src={`${process.env.PUBLIC_URL}/images/new_window_icon.png`} /> */}
                </button>
            </div>

            {/* 리뷰 사진 */}
            <ReviewImg reviewImg={item.reviewImg} length={length} />

            <div className={styles["review-bottom"]}>
                <div className={styles["review-bottom-left"]}>
                    {item.isLike ? (
                        <div
                            onClick={item.likeChangeHandler}
                            className={[
                                styles["review-bottom-icon"],
                                styles["review-like-icon-clicked"],
                            ].join(" ")}
                        >
                            {item.reviewLikes}
                            {item.updateLike}
                        </div>
                    ) : (
                        <div
                            onClick={item.likeChangeHandler}
                            className={[styles["review-bottom-icon"]].join(" ")}
                        >
                            {item.reviewLikes}
                            {item.updateLike}
                        </div>
                    )}

                    {/* <div
                        className={[
                            styles["review-bottom-icon"],
                            styles["review-comment-icon"],
                        ].join(" ")}
                    >
                        {item.reviewComment}
                    </div> */}
                </div>
                <div className={styles["review-bottom-etc"]}>
                    {item.writtenDate}
                    <img
                        src="https://assets.triple.guide/images/btn-review-more@4x.png"
                        className={styles["review-more-icon"]}
                        alt="icon_more_btn"
                    />
                </div>
            </div>
        </li>
    );
};

export default ReviewItem;
