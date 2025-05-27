const initialState = {
    allPolicy:false
};

const AllPolicyReducer = (state=initialState,action) => {
    switch (action.type){
        case "SET_ALL_POLICY":
            return {...state, allPolicy: action.payload};
        default :
            return state;
    }
}

export default AllPolicyReducer;