import { combineReducers } from 'redux';

import { currentDay, reminderList, history } from './reducers';

const rootReducer = combineReducers({
    currentDay,
    reminderList,
});

export default rootReducer;
