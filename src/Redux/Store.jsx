import { createStore } from "redux";
import ReducerCounter from "./ReducersCounter";


const store = createStore(ReducerCounter)

export default store;