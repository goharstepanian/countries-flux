import { createStore, combineReducers, applyMiddleware } from "redux";
import { requestsReducer } from "./reducers/requestsReducer";
import { thunk } from "redux-thunk";
import { countryReducer } from "./reducers/countryReducer";



const rootReducer = combineReducers({
    homePage: requestsReducer,
    countryPage : countryReducer,
})




export const store = createStore(rootReducer, applyMiddleware(thunk));
