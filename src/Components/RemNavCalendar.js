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
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            currentDay: nextProps.currentDay,
        });
    }
    componentDidMount (event) {
        let modal = document.getElementById('remNavModal');
        window.onclick = (event) => {
            if (event.target === modal) {
                this.props.onRemNavClose();
            }
        }
    }
    updateMonth = ( date ) => this.setState({ currentDay: date })
    render () {
         let date = new Date(this.state.currentDay.year, this.state.currentDay.month, this.state.currentDay.date);
         let monthName = date.toLocaleString("en-us", { month: 'long' });
         return (
             <div className='rem-nav-modal fade' id='remNavModal' tabIndex='-1' role='dialog' aria-labelledby='myModalLabel' aria-hidden='true' style={{ display: 'block', opacity: '1' }}>
             <div className='rem-nav-modal-content'>
                 <div className='rem-nav-modal-body'>
                     <span className='leftChevron' onClick={ () => { this.updateMonth(changeDate(this.state.currentDay, true)) } }>
                         <i className='fas fa-chevron-left'></i>
                     </span>
                     {' '}
                     <span className='rightChevron' onClick={ () => { this.updateMonth(changeDate(this.state.currentDay, false)) } }>
                         <i className='fas fa-chevron-right'></i>
                     </span>
                     {' '}
                     <span className='month-span'>{ monthName }{' '}{ this.state.currentDay.year }</span>
                     <NavCalendarView
                         currentDay={ this.state.currentDay }
                         updateCurrentDay={ this.props.updateCurrentDay }
                         onModalClose={ this.props.onRemNavClose }
                     />
                 </div>
             </div>
             </div>
        );
    }

}
export default RemNavCalendar;
