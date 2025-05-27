const initialStete = {
    dataAnalyst: false
}

const DataAnalystReducer = (state=initialStete,action) => {
    switch (action.type) {
        case "SET_DATA_ANALYST":
            return {...state, dataAnalyst: action.payload};
        default:
            return state;
    }
}

export default DataAnalystReducer;