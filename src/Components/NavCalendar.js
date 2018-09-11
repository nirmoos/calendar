import React from 'react';
import '../Stylesheets/NavCalendar.css';
import changeDate from '../Utils/Functions';
import NavCalendarView from './NavCalendarView';


class NavCalendar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentDay: this.props.currentDay,
        }
        this.style = {
            display: 'block',
            opacity: '1',
        }
        this.updateMonth = this.updateMonth.bind(this);
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            currentDay: nextProps.currentDay,
        });
    }
    updateMonth (date) {
        this.setState({
            currentDay: date,
        });

    }
    render () {
         let date = new Date(this.state.currentDay.year, this.state.currentDay.month, this.state.currentDay.date);
         let monthName = date.toLocaleString("en-us", { month: "long" });
         return (
              <div className='nav-calendar-button'>
              <div>
                   <div className="modal fade" id="navModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style={this.style}>
                   <div className="modal-dialog">
                        <div className="modal-content">
                             <div className="modal-body">
                                  <i className="fas fa-chevron-left" onClick={() => { this.updateMonth(changeDate(this.state.currentDay, true)) }}></i>
                                  <i className="fas fa-chevron-right" onClick={() => { this.updateMonth(changeDate(this.state.currentDay, false)) }}></i>
                                  <span>{monthName}</span>
                                  <span>{this.state.currentDay.year}</span>
                                  <NavCalendarView
                                        onModalClose={this.props.onModalClose}
                                       currentDay={this.state.currentDay}
                                       updateCurrentDay={() => this.props.updateCurrentDay(this.state.currentDay)}
                                  />
                             </div>
                        </div>
                   </div>
                   </div>
                   </div>
              </div>
        );
    }

}
export default NavCalendar;
