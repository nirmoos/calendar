import React from 'react';
import { connect } from 'react-redux';
import '../Stylesheets/AddReminder.css';
import { save_reminder } from '../Actions';
import RemNavCalendar from './RemNavCalendar';

class AddReminder extends React.Component {
     constructor(props) {
          super(props);
          this.state = {
               taskName: '',
               currentDay: {
                   year: this.props.currentDay.year,
                   month: this.props.currentDay.month,
                   date: this.props.clickedDate,
               },
               time: '12:00',
               style: {
                    display: 'block',
                    opacity: '1',
                    marginTop : '150px',
               },
               isVisible: false,
          }
          this.onClose = this.onClose.bind(this);
          this.onTaskNameChange = this.onTaskNameChange.bind(this);
          this.saveTask = this.saveTask.bind(this);
          this.setDate = this.setDate.bind(this);
          this.showModal = this.showModal.bind(this);
          this.onTimeChange = this.onTimeChange.bind(this);
     }
     onClose () {
          this.props.onModalClose();
     }
     saveTask () {
          this.props.saveTask( this.state.taskName, this.state.currentDay, this.state.time );
          this.onClose();
     }
     onTaskNameChange (event) {
          this.setState({
               taskName: event.target.value,
          });
     }
     setDate (date) {
         this.setState({
             isVisible: false,
             currentDay: date,
         });
     }
     showModal () {
         this.setState({
             isVisible: true,
         });
     }
     onTimeChange (event) {
         this.setState({
             time: event.target.value,
         });
     }
    render () {
        let date = new Date(this.state.currentDay.year, this.state.currentDay.month, this.state.currentDay.date);
        let monthName = date.toLocaleString("en-us", { month: "long" });
        return (
             <div id='addTaskModal' className='modal fade' style={this.state.style}>
             <div className='modal-dialog'>
             <div className='modal-content'>

                  <div className='modal-body'>
                      <button type="button" className="close" onClick={this.onClose} aria-label="Close">
                           <span aria-hidden="true">&times;</span>
                       </button>
                       <input className='add-title-box' onChange={this.onTaskNameChange} type='text' placeholder='Add title...'/>
                       <div>
                            <span className='reminder-label'>Reminder</span>
                            <div>
                                <span>Date:</span>{' '}
                                <span>
                                    {this.state.currentDay.year}{' '}
                                    {monthName}{' '}
                                </span>
                                <span>{this.state.isVisible && <RemNavCalendar currentDay={this.state.currentDay} updateCurrentDay={this.setDate} />}</span>
                                <span>{this.state.currentDay.date}</span>
                                <span><i className='fas fa-caret-down' onClick={this.showModal}></i></span>
                                {' '}
                                <span><input type='time' value={this.state.time} name='time' onChange={this.onTimeChange}/></span>
                            </div>
                       </div>
                  </div>
                  <div className='modal-footer'>
                      <button type='button' className='btn btn-default' onClick={this.onClose}>Close</button>
                      <button onClick={this.saveTask} className='btn btn-primary'>SAVE</button>
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
          saveTask: (taskName, date, time) => dispatch(save_reminder(taskName, date, time)),
     })
)(AddReminder);
