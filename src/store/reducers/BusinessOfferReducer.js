const initialState = {
    businessOffer : false
}

const BusinessOfferReducer = (state=initialState,action) =>{
    switch (action.type) {
        case "SET_BUSINESS_OFFER":
            return{...state, businessOffer: action.payload }
        default:
            return state;
    }
}

export default BusinessOfferReducer;