//4_create store
import {createStore} from "redux";
import {rootReducer} from "../reducers";

export const store = createStore(rootReducer)