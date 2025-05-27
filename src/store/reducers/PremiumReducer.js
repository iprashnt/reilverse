import { createSlice } from "@reduxjs/toolkit";

const PremiumReducer = createSlice({
    name : "premium",
    initialState : {
        premiumData : null,
    },
    reducers : {
        addPremiumData : (state, action)=>{
            state.premiumData = {
                ...(state.premiumData || {}),
                ...action.payload
            }
        }
    }
})

export const {addPremiumData} = PremiumReducer.actions;
export default PremiumReducer.reducer;