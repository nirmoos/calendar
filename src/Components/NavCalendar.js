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
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            currentDay: nextProps.currentDay,
        });
    }
    componentDidMount (event) {
        let modal = document.getElementById('navModal');
        window.onclick = (event) => {
            if (event.target === modal) {
                this.props.onModalClose();
            }
        }
    }
    updateMonth = ( date ) => this.setState({ currentDay: date })
    render () {
         let date = new Date(this.state.currentDay.year, this.state.currentDay.month, this.state.currentDay.date);
         let monthName = date.toLocaleString('en-us', { month: 'short' });
         return (
              <div className='nav-calendar-button'>
                   <div className='nav-modal fade' id='navModal' tabIndex='-1' role='dialog' aria-labelledby='myModalLabel' aria-hidden='true' style={{ display: 'block', opacity: '1' }}>
                        <div className='nav-modal-content'>
                             <div className='nav-modal-body'>
                                  <span className='left-chevron'>
                                      <i style={{marginLeft: '10px'}} className='fas fa-chevron-left' onClick={() => { this.updateMonth(changeDate(this.state.currentDay, true)) }}></i>
                                  </span>
                                  {' '}
                                  <span className='right-chevron'>
                                      <i className="fas fa-chevron-right" onClick={() => { this.updateMonth(changeDate(this.state.currentDay, false)) }}></i>
                                  </span>
                                  {' '}
                                  <span className='month-span-main'>{ monthName }</span>
                                  {' '}
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
        );
    }

}
export default NavCalendar;
