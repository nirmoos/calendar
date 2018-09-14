import React from 'react';

import '../Stylesheets/CalendarHeader.css';
import NavCalendar from '../Containers/NavCalendar';

import changeDate from '../Utils/Functions';

class CalendarHeader extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            isVisible: false,
        }
    }
    onModalClose = () => this.setState({ isVisible: false })
    showModal = () => this.setState({ isVisible: true })
    render () {
        let currentDay = this.props.currentDay;
        let date = new Date(currentDay.year, currentDay.month, currentDay.date);
        let monthName = date.toLocaleString("en-us", { month: "long" });
        return (
            <div className='navigation-container'>
                <div className='navigation-options'>
                    <div className='show-today-button' onClick={this.props.changeToCurrent}>TODAY</div>
                    <span className='chevron-left' onClick={() => { this.props.goToPreviousMonth(changeDate(currentDay, true)) }}><i className="fas fa-chevron-left"></i></span>
                    <span className='chevron-left' onClick={() => { this.props.goToNextMonth(changeDate(currentDay, false)) }}><i className="fas fa-chevron-right"></i></span>
                    <div className='year-month-wrapper' onClick={this.showModal}>
                        <span>{monthName}</span>
                        <span>{currentDay.year}</span>
                        {' '}
                        <i className='fas fa-caret-down'></i>
                    </div>
                    {this.state.isVisible && <NavCalendar onModalClose={this.onModalClose} />}
                </div>
            </div>
        );
    }
}
export default CalendarHeader;
