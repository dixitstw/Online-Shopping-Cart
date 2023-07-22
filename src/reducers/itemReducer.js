const initialData = {
    items: []
}

const itemReducer = (state = initialData, action) => {
    switch(action.type) {
        case "LOAD_DATA":
    return {items: action.payload}

    default:
        return state
    }
}
export default itemReducer