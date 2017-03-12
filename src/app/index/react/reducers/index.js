import { combineReducers } from 'redux';
import * as reducerPlanInfo from './preInfo.js';

const rootReducer = combineReducers({
    ...reducerPlanInfo
});

export default rootReducer;
