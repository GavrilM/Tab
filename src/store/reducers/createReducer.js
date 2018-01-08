export default function createReducer(initialState, listeners){
    return (state = initialState, action) => {
        if(listeners.hasOwnProperty(action.type))
            return handlers[action.type](state, action)
        else
            return state
    }
}