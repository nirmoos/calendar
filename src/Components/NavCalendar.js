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
         let monthName = date.toLocaleString('en-us', { month: 'long' });
         return (
                   <div className='nav-modal fade' id='navModal' tabIndex='-1' role='dialog' aria-labelledby='myModalLabel' aria-hidden='true' style={{ display: 'block', opacity: '1' }}>
                        <div className='nav-modal-content'>
                             <div className='nav-modal-body'>
                                  <span className='left-chevron' onClick={() => { this.updateMonth(changeDate(this.state.currentDay, true)) }}>
                                      <i style={{marginLeft: '10px'}} className='fas fa-chevron-left'></i>
                                  </span>
                                  {' '}
                                  <span className='right-chevron' onClick={() => { this.updateMonth(changeDate(this.state.currentDay, false)) }}>
                                      <i className='fas fa-chevron-right'></i>
                                  </span>
                                  {' '}
                                  <span className='month-span-main'>{ monthName }{' '}{this.state.currentDay.year}</span>
                                  <NavCalendarView
                                        onModalClose={this.props.onModalClose}
                                        currentDay={this.state.currentDay}
                                        updateCurrentDay={() => this.props.updateCurrentDay(this.state.currentDay)}
                                  />
                             </div>
                        </div>
                   </div>
        );
    }

}
export default NavCalendar;
