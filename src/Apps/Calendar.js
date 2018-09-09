import React from 'react';
import CalendarView from '../Containers/CalendarView';
import CalendarHeader from '../Containers/CalendarHeader';

import '../Stylesheets/Calendar.css';

const Calendar = () => {
    return (
        <div className='calendar-app-container'>
            <CalendarHeader />
            <CalendarView />
        </div>
    );
};

export default Calendar;
