import React from 'react';

import '../Stylesheets/CalendarHeader.css';
import NavCalendar from '../Apps/NavCalendar';

import changeDate from '../Utils/Functions';

class CalendarHeader extends React.Component {
    constructor (props) {
        super(props);

    }
    render () {
        let currentDay = this.props.currentDay;
        let date = new Date(currentDay.year, currentDay.month, currentDay.date);
        let monthName = date.toLocaleString("en-us", { month: "long" });
        return (
            <div className='navigation-container'>
                <div className='navigation-options'>
                    <div className='show-today-button' onClick={this.props.changeToCurrent}>TODAY</div>
                    <i className="fas fa-chevron-left" onClick={() => { this.props.goToPreviousMonth(changeDate(currentDay, true)) }}></i>
                    <i className="fas fa-chevron-right" onClick={() => { this.props.goToNextMonth(changeDate(currentDay, false)) }}></i>
                    <div className='year-month-wrapper'>
                        <span>{monthName}</span>
                        <span>{currentDay.year}</span>
                    </div>
                    <NavCalendar />
                </div>
            </div>
        );
    }
}
export default CalendarHeader;
