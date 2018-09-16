import React from 'react';
import { connect } from 'react-redux';
import '../Stylesheets/AddReminder.css';
import { save_reminder, delete_remider } from '../Actions';
import RemNavCalendar from './RemNavCalendar';

class AddReminder extends React.Component {
     constructor( props ) {
          super( props );
          this.state = {
               taskName: this.props.cemValue === undefined ? '' : (
                   this.props.cemValue.title === undefined ? '' : this.props.cemValue.title
               ),
               currentDay: {
                   year: this.props.currentDay.year,
                   month: this.props.currentDay.month,
                   date: this.props.clickedDate,
               },
               time: '12:00',
               isVisible: false,
          }
     }
     componentDidMount (event) {
         let modal = document.getElementById('addTaskModal');
         window.onclick = (event) => {
             if (event.target === modal) {
                 this.props.onModalClose();
             }
         }
     }
     saveTask = () => {
         let taskTitle = this.state.taskName;
         if ( taskTitle === '' || taskTitle === undefined )
                taskTitle = '(No title)';
          if ( this.props.cemValue !== undefined &&  this.props.cemValue.length !== 0 )
                this.props.deleteReminder( this.props.cemValue.date, this.props.cemValue.title );
          this.props.saveReminder( taskTitle, this.state.currentDay, this.state.time );
          this.onClose();
     }
     onClose = () => this.props.onModalClose();
     onTaskNameChange = (event) => this.setState({ taskName: event.target.value });
     setDate = (date) => this.setState({ isVisible: false, currentDay: date });
     onRemNavClose = () => this.setState({ isVisible: false });
     showModal = () => this.setState({ isVisible: true });
     onTimeChange = (event) => this.setState({ time: event.target.value });
     render () {
        let date = new Date(this.state.currentDay.year, this.state.currentDay.month, this.state.currentDay.date);
        let monthName = date.toLocaleString("en-us", { month: "long" });
        return (
             <div id='addTaskModal' className='my-modal' style={{ display: 'block', opacity: '1' }}>
             <div className='my-modal-content'>
                  <div className='my-modal-body'>
                      <button data-toggle='tooltip' data-placement='bottom' title='Close this dialogue box' type="button" className="close" onClick={ this.onClose } aria-label="Close">
                           <span aria-hidden="true">&times;</span>
                       </button>
                       <input
                           className='add-title-box'
                           value={ this.state.taskName }
                           onChange={ this.onTaskNameChange }
                           type='text'
                           placeholder='Add title...'
                           autoFocus
                       />
                       <div>
                            <span className='reminder-label'>Reminder</span>
                            <div>
                                <span>Date:</span>{' '}
                                <div className='rem-year-month-wrapper'>
                                    <span>
                                        { this.state.currentDay.year }{' '}
                                        { monthName }{' '}
                                    </span>
                                    <span>{ this.state.isVisible && <RemNavCalendar
                                            currentDay={ this.state.currentDay }
                                            updateCurrentDay={ this.setDate }
                                            onRemNavClose={ this.onRemNavClose }
                                        /> }
                                    </span>
                                    <span>{this.state.currentDay.date}</span>
                                    {' '}
                                </div>
                                {' '}
                                <span className='facaretDown' onClick={ this.showModal }><i className='fas fa-caret-down'></i></span>
                                {' '}
                                <span className='time-span'>
                                    <input
                                        type='time'
                                        className='form-control'
                                        value={ this.state.time }
                                        name='time'
                                        onChange={ this.onTimeChange }
                                        required
                                    />
                                </span>
                            </div>
                       </div>
                  </div>
                  <div className='my-modal-footer'>
                      <div className='modal-footer-div'>
                          <button type='button' className='btn btn-default' onClick={ this.onClose }>Close</button>
                          <button onClick={ this.saveTask } className='btn btn-primary'>SAVE</button>
                      </div>
                  </div>
             </div>
             </div>
         );
    }
}
export default connect(
     state => ({
         currentDay: state.currentDay,
     }),
     dispatch => ({
          saveReminder: ( taskName, date, time ) => dispatch( save_reminder( taskName, date, time ) ),
          deleteReminder: ( date, title ) => dispatch( delete_remider( date, title ) ),
     })
)( AddReminder );
