const initialState = {
    personalOffers:false
}

const PersonalOffersReducer = (state=initialState,action) => {
    switch (action.type) {
        case "SET_PERSONAL_OFFER":
            return {...state, personalOffers: action.payload}
        default:
            return state;
    }
}

export default PersonalOffersReducer;