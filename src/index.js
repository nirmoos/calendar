import React from 'react';
import ReactDOM from 'react-dom';
import Calendar from './Apps/Calendar';
import './Utils/FontAwsome';
import rootReducer from './Reducers';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
// import AddReminder from './Components/AddReminder';
const store = createStore(rootReducer);


ReactDOM.render(
    <Provider store={store}>
        <Calendar />
    </Provider>,
    document.getElementById('root')
);
