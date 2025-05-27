import {configureStore} from "@reduxjs/toolkit";
import AllPolicyReducer from "./reducers/AllPolicyReducer";
import PersonalOffersReducer from "./reducers/PersonalOffersReducer";
import BusinessOfferReducer from "./reducers/BusinessOfferReducer";
import DataAnalystReducer from "./reducers/DataAnalystReaducer";


const store = configureStore({
    reducer:{
        allPolicy: AllPolicyReducer,
        personalOffers: PersonalOffersReducer,
        businessOffer: BusinessOfferReducer,
        dataAnalyst: DataAnalystReducer
    }
})

export default store;