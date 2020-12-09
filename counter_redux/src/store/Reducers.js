import {combineReducers} from "redux"
import counterReducer from "./reducers/Counter"

const rootReducer = combineReducers({
    counter:counterReducer
})

export default rootReducer