import { combineReducers } from "redux";
import { document1Reducer } from "./actions";
import { document2Reducer } from "./actions";
import { compareDocumentReducer } from "./actions";

const rootReducer = combineReducers({
    document1: document1Reducer,
    document2: document2Reducer,
    compare: compareDocumentReducer
});

export default rootReducer;