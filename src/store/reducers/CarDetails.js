import { createSlice } from "@reduxjs/toolkit";

const CarDetailsReducer = createSlice({
    name : "cardata",
    initialState : {
        CarData : "null",
    },
    reducers : {
        addCarData : (state, action)=>{
            state.CarData = action.payload
        }
    }
})

export const {addCarData} = CarDetailsReducer.actions;
export default CarDetailsReducer.reducer;
