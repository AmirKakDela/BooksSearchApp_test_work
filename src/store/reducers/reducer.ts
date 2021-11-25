import {combineReducers} from "redux";
import booksReducer from "./booksReducer";

const reducer = combineReducers({
    books: booksReducer
})

export type ReducerState = ReturnType<typeof reducer>

export default reducer;