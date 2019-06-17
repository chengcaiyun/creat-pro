//这是一个合并的reducer
import {combineReducers} from "redux"
import commons from "./commons/reducer"
const reducer = combineReducers({
    commons
})
export default reducer;