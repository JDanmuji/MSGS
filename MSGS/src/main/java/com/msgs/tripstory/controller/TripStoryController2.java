package com.msgs.tripstory.controller;

import lombok.RequiredArgsConstructor;

import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.msgs.tripstory.service.TripStoryService;

@RestController // JSON 또는 XML 형식의 데이터를 반환
@RequestMapping("/tripstory")
@RequiredArgsConstructor // final variable에 대한 생성자 생성
public class TripStoryController2 {

	private final TripStoryService tripStoryService;
	
	private JSONObject getDummyData() {
		JSONObject dummyData = new JSONObject();

		dummyData.put("tripId", 1);
		dummyData.put("title", "즐거운 강릉 여행 다녀오기");
		dummyData.put("comment", "나는 즐거운 강릉 여행을 다녀왔다.");
		dummyData.put("rating", 4);

		JSONArray dateList = new JSONArray();
		dateList.put("2023-05-23");
		dateList.put("2023-05-24");
		dateList.put("2023-05-25");
		dateList.put("2023-05-26");
		dummyData.put("date_list", dateList);

		dummyData.put("city", "강원북도 강릉시");

		JSONArray tripDetailList = new JSONArray();

		JSONObject tripDetail1 = new JSONObject();
		tripDetail1.put("day", "1_detail_day1");
		tripDetail1.put("dayDate", "2023-05-23");
		tripDetail1.put("dayCount", "1");
		tripDetail1.put("content", "");

		JSONArray tripDayDetail1 = new JSONArray();

		JSONObject tripDayDetail1_1 = new JSONObject();
		tripDayDetail1_1.put("tripDetailId", "1_Day1");
		tripDayDetail1_1.put("title", "안목해변");
		tripDayDetail1_1.put("subtitle", "관광명소");
		tripDayDetail1_1.put("mapLon", "128.8784972");
		tripDayDetail1_1.put("mapLat", "37.74913611");
		tripDayDetail1_1.put("scheduleOrder", 1);
		tripDayDetail1_1.put("rating", 4);
		tripDayDetail1_1.put("content", "재밌게 놈");

		JSONArray img1_1 = new JSONArray();
		img1_1.put("https://images.pexels.com/photos/4945061/pexels-photo-4945061.jpeg");
		img1_1.put("https://images.pexels.com/photos/6181092/pexels-photo-6181092.jpeg");
		img1_1.put("https://pbs.twimg.com/media/EA9UJBjU4AAdkCm.jpg");
		tripDayDetail1_1.put("img", img1_1);

		tripDayDetail1.put(tripDayDetail1_1);

		tripDetail1.put("tripDayDetail", tripDayDetail1);

		tripDetailList.put(tripDetail1);

		// Create and add other trip details similarly...

		// Add the tripDetailList array to the dummyData object
		dummyData.put("tripDetailList", tripDetailList);

		return dummyData;
	}
	
	
				 
    @PostMapping("/getStoryDetail")
    public ResponseEntity<String> getStoryDetail(@RequestBody String data) {
    	
    	JSONObject requestData = new JSONObject(data);
        String storyId = requestData.getString("storyId");
    	
    	// 나중에 db에서 가져온 진짜 데이터로 대체
    	JSONObject responseObj = getDummyData();
    	String responseStr = responseObj.toString();

    	return ResponseEntity.status(HttpStatus.OK).body(responseStr);
    }
}
