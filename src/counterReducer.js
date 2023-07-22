const initialData= {
    count: 100
}

const counterReducer = (state=initialData, action) => {
      switch(action.type) {
        case "ADD_COUNT": 
        return {count: ++state.count}

        case "REDUCE_COUNT":
        return {count: --state.count}

        case "RESET_COUNT":
        return {count: 100}

        default:
            return state
      }
}

export default counterReducer