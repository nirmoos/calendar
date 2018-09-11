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
        this.showModal = this.showModal.bind(this);
        this.onModalClose = this.onModalClose.bind(this);
    }
    onModalClose () {
        this.setState({
            isVisible: false,
        })
    }
    showModal () {
        this.setState({
            isVisible: true,
        })
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
                    {' '}
                    <i className='fas fa-caret-down' onClick={this.showModal}></i>
                    {this.state.isVisible && <NavCalendar onModalClose={this.onModalClose} />}
                </div>
            </div>
        );
    }
}
export default CalendarHeader;
