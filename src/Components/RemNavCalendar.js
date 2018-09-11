import React from 'react';
import '../Stylesheets/RemNavCalendar.css';
import changeDate from '../Utils/Functions';
import NavCalendarView from './NavCalendarView';


class RemNavCalendar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentDay: this.props.currentDay,
        }
        this.updateMonth = this.updateMonth.bind(this);
        this.style = {
            display: 'block',
            opacity: '1',
        }
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
             <div className="modal fade" id="remNavModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style={this.style}>
             <div className="modal-dialog">
             <div className="modal-content">
                 <div className="modal-body">
                     <i className="fas fa-chevron-left" onClick={() => { this.updateMonth(changeDate(this.state.currentDay, true)) }}></i>
                     <i className="fas fa-chevron-right" onClick={() => { this.updateMonth(changeDate(this.state.currentDay, false)) }}></i>
                     <span>{monthName}</span>
                     <span>{this.state.currentDay.year}</span>
                     <NavCalendarView
                         currentDay={this.state.currentDay}
                         updateCurrentDay={this.props.updateCurrentDay}
                         onModalClose={() => {}}
                     />
                 </div>
             </div>
             </div>
             </div>
        );
    }

}
export default RemNavCalendar;
