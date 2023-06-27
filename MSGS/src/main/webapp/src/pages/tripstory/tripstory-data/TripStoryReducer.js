import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    tripStoryData : {},
    tripDetailList : [],
    tripDayDetail : []
}

const tripStorySlice = createSlice({
    name : 'tripStory',
    initialState,
    reducers: {
        getTripStory(state, action){
            delete action.payload['tripDetailList']  //하위 데이터 제거
            state.tripStoryData = action.payload
            console.log(state.tripStoryData)
        },
        getTripDetail(state, action) {
            state.tripDetailList = action.payload
            console.log(action.payload)
        },
        getTripDayDetail(state, action) {
            state.tripDayDetail = action.payload
            console.log(action.payload)
        }, 
        setWriteFromData(state, action) {
            console.log(action.payload)

            state.tripStoryData.title = action.payload.writeTitle
            state.tripStoryData.comment = action.payload.writeComment
            state.tripStoryData.rating = action.payload.writeRating
            console.log(state)
        }
    }

});


export const tripStoryActions = tripStorySlice.actions
export default tripStorySlice.reducer