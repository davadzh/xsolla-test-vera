import {combineReducers} from "redux";
import dataReducer from "./dataReducer";
import activityReducer from "./activityReducer";

export const rootReducer = combineReducers({
  data: dataReducer,
  activity: activityReducer,
});