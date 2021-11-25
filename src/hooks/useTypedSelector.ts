import {TypedUseSelectorHook, useSelector} from "react-redux";
import {ReducerState} from "../store/reducers/reducer";

export const useTypedSelector: TypedUseSelectorHook<ReducerState> = useSelector