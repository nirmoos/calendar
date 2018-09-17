import React from 'react';
import CalendarView from '../Containers/CalendarView';
import CalendarHeader from '../Containers/CalendarHeader';
import Indicator from '../Containers/Indicator';

import '../Stylesheets/Calendar.css';

const Calendar = () => {
    return (
        <div>
            <Indicator />
            <div className='calendar-app-container'>
                <CalendarHeader />
                <CalendarView />
            </div>
        </div>
    );
};

export default Calendar;
