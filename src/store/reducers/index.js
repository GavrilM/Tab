import createReducer from './createReducer.js'

export default createReducer({}, {
    setCamera(state, action){
        return {
            ...state,
            camera: action.camera
        }
    }
})