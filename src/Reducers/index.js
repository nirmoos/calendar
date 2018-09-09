import { combineReducers } from 'redux';

import { currentDay, reminderList, history } from './reducers';

const rootReducer = combineReducers({
    currentDay,
    reminderList,
    history,
});

export default rootReducer;
