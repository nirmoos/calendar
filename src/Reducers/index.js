import { combineReducers } from 'redux';

import { currentDay, reminderList } from './reducers';

const rootReducer = combineReducers({
    currentDay,
    reminderList,
});

export default rootReducer;
