import React from 'react';
import { connect } from 'react-redux';
import NavCalendarView from '../Components/NavCalendarView';
import { update_current_day } from '../Actions';
import '../Stylesheets/NavCalendar.css';
import changeDate from '../Utils/Functions';

class NavHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentDay: this.props.currentDay,
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
              <i className='fas fa-caret-down' data-toggle='modal' data-target='#navModal'></i>
              <div>
                   <div className="modal fade" id="navModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                   <div className="modal-dialog">
                        <div className="modal-content">
                             <div className="modal-body">
                                  <i className="fas fa-chevron-left" onClick={() => { this.updateMonth(changeDate(this.state.currentDay, true)) }}></i>
                                  <i className="fas fa-chevron-right" onClick={() => { this.updateMonth(changeDate(this.state.currentDay, false)) }}></i>
                                  <span>{monthName}</span>
                                  <span>{this.state.currentDay.year}</span>
                                  <NavCalendarView
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

const mapStatetoProps = state => ({
    currentDay: state.currentDay,
})

const mapDispatchtoProps = dispatch => ({
    updateCurrentDay: date => dispatch(update_current_day(date))
});

export default connect (
    mapStatetoProps,
    mapDispatchtoProps,
)(NavHeader);
