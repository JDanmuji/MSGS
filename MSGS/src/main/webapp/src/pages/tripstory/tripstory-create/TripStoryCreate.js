import React, { useEffect, useState } from 'react'
import axios from "axios";

import styles from './Tripstory.module.css'
import WriteForm from './WriteForm.js'
import Map from '../../../components/tripstory/tripstory-create/common/Map'
import DateSummary from './DateSummary'
import DayBtn from '../../../components/tripstory/tripstory-create/tripstory-create-day/DayBtn'
import SpotItemList from '../../../components/tripstory/tripstory-create/tripstory-create-spot/SpotItemList'
import TripStoryDetailData from '../tripstory-data/TripStoryDetailData'

import { useDispatch, useSelector } from 'react-redux'
import { tripStoryActions } from '../tripstory-data/TripStoryReducer'
import Cookies from 'js-cookie'

const tripStoryData = TripStoryDetailData
const tripStoryDataDetail = TripStoryDetailData.tripDetailList

/*이 페이지 마운트 시 백에서 가져오는 정보 Start*/
const schedule_id = 3
const dateList = [ '2023.6.22', '2023.6.23', '2023.6.24' ]
const cityName = '강릉·속초'

const storyList = {
	/*storyList의 각 Object에 추가할 데이터 (Nullable)*/
	// rating = 4,
	// comment = "아 여기는 뷰가 멋지더라",
	// img_origin_name = "img origin name",
	// img_path = "img path"
	1: [
		{
			contentid: '697068',
			title: '자연향기펜션',
			areacode: 31,
			sigungucode: 19,
			contenttypeid: '32',
			firstimage2: 'http://tong.visitkorea.or.kr/cms/resource/18/2613518_image2_1.jpg',
			mapx: 127.3819906851,
			mapy: 37.6341175914,
			location: '양평',
			isChecked: false,
			type: '숙박',
			order: 1,
			placeOrder: null,

			rating: 4,
			comment: '아 여기는 뷰가 멋지더라',
			img_origin_name: 'img origin name',
			img_path: 'img path',
		},
		{
			contentid: '125538',
			title: '현등사(가평)',
			areacode: 31,
			sigungucode: 1,
			contenttypeid: '12',
			firstimage2: 'http://tong.visitkorea.or.kr/cms/resource/49/2690649_image3_1.jpg',
			mapx: 127.3309245813,
			mapy: 37.8705863732,
			location: '가평',
			isChecked: false,
			type: '관광지',
			placeOrder: 1,
			order: 2,

			rating: 4,
			comment: '아 여기는 뷰가 멋지더라',
			img_origin_name: 'img origin name',
			img_path: 'img path',
		},
	],
	2: [
		{
			contentid: '139868',
			title: '아띠울펜션',
			areacode: 31,
			sigungucode: 19,
			contenttypeid: '32',
			firstimage2: 'http://tong.visitkorea.or.kr/cms/resource/94/1893194_image3_1.jpg',
			mapx: 127.5863817028,
			mapy: 37.5908124797,
			location: '양평',
			isChecked: false,
			type: '숙박',
			order: 1,
			placeOrder: null,

			rating: 4,
			comment: '아 여기는 뷰가 멋지더라',
			img_origin_name: 'img origin name',
			img_path: 'img path',
		},
		{
			contentid: '2754411',
			title: '회령손만두국',
			areacode: 31,
			sigungucode: 19,
			contenttypeid: '39',
			firstimage2: 'http://tong.visitkorea.or.kr/cms/resource/25/2754325_image2_1.jpg',
			mapx: 127.6325993445,
			mapy: 37.5085950855,
			location: '양평',
			isChecked: false,
			type: '음식점',
			placeOrder: 1,
			order: 2,

			rating: 4,
			comment: '아 여기는 뷰가 멋지더라',
			img_origin_name: 'img origin name',
			img_path: 'img path',
		},
		{
			contentid: '608274',
			title: '두부와보리 (옥천순두부)',
			areacode: 31,
			sigungucode: 19,
			contenttypeid: '39',
			firstimage2: 'http://tong.visitkorea.or.kr/cms/resource/34/612534_image3_1.jpg',
			mapx: 127.4668053672,
			mapy: 37.5321698635,
			location: '양평',
			isChecked: false,
			type: '음식점',
			placeOrder: 2,
			order: 3,

			rating: 4,
			comment: '아 여기는 뷰가 멋지더라',
			img_origin_name: 'img origin name',
			img_path: 'img path',
		},
	],
}
/*이 페이지 마운트 시 백에서 가져오는 정보 End*/

/*전체에 대한 데이터*/
let title = '재밌었던 강릉 여행~^^'
let rating = 5
let comment = '갑작스럽게 가게 된 여행이지만 날씨가 좋아 일정 내내 쾌적하게 다녔다~! 오랜만에 동해바다를 보니 가슴이 뻥 뚫리는 기분이었다.'
/*일자별 데이터 (Ex. Day3에 대한 코멘트)*/
let dailyComment = {
	1: '첫째날은 흐린가 싶더니 점심 지나서는 쾌청한 날씨였다.',
	2: '어제 일찍 자서 컨디션 좋게 하루를 시작했다.',
	3: '여행 마지막날ㅠ 아침으로 먹은 해장국이 존맛이었음',
}


 //저장 버튼 눌렀을 때 백으로 Story 데이터 보내기.
  const saveTripStory = () => {
      const requestBody = {
				dateList: dateList,
				storyList: storyList,
				dailyComment: dailyComment,
				storyData: {
					schedule_id: schedule_id,
					cityName: cityName,
					title: title,
					rating: rating,
					comment: comment,
				},
			}

    axios
    .post('/tripstory/info', requestBody)
    .then(function (response) {
        console.log('saveTripStory  성공')
    })
    .catch(function (error) {
        console.log('saveTripStory  실패', error)
    })
  };

//tripstory 가장 첫 컴포넌트입니다.
const TripStoryCreate = () => {
	const dispatch = useDispatch()

	const [dayBtn, setDayBtn] = useState(1) //초기값 false
	//const [tripStoryData, setTripStoryData] = useState({});

	const initDataSetting = (data) => {
		dispatch(tripStoryActions.getTripDayDetail(tripStoryDataDetail[data - 1]))
		dispatch(tripStoryActions.getTripDetail(tripStoryDataDetail))
		dispatch(tripStoryActions.getTripStory(tripStoryData))
	}

	const tokenValue = Cookies.get('token')
	console.log(tokenValue)
	initDataSetting(dayBtn)
	const getDaySelect = (data) => {
		setDayBtn(data)
		//dayBtn 시 update 가 안되면서 하나씩 데이터가 밀리는 상태가 발생
		//직접 받은 데이터를 기준으로 컨트롤
		initDataSetting(data)
	}

	useEffect(() => {
        initDataSetting(dayBtn)
        



	}, [])

	return (
		<div className={styles['width-wrapper1']}>
			<div className={styles['map']}>
				<Map />
			</div>

			<div className={styles['width-form']}>
				<WriteForm />
			</div>

			<div className={styles['tripStoryDay-form-area ']}>
				<DayBtn getDaySelect={getDaySelect} dayBtn={dayBtn} />
			</div>
		</div>
	)
}

export default TripStoryCreate
