import React from 'react';
import Calendar from './Calendar';
import styles from './TripSchedule2.module.css';

const TripSchedule2 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>여행일정 등록</h1>
        <br />

        <h2>일정에 따른 일기예보, 여행정보를 알려드립니다.</h2>
        <Calendar />
        <br /><br />
      </div>
    </div>
  );
};

export default TripSchedule2;