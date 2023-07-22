const initialData = {
    gameName: "Football",
    playerName: "Reece James"
    
}

const gameReducer = (state=initialData, action) =>{
    switch(action.type) {
        case "UPDATE_GAME":
        return {...state, gameName: action.payload}

        case "UPDATE_PLAYER":
        return {...state, playerName: action.payload}
        default:
            return state
    }
}

export default gameReducer

//... -> rest operator/ spread operator
//preserves previous states