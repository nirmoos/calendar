import React from 'react';
import { connect } from 'react-redux';
import '../Stylesheets/AddReminder.css';
import save_reminder from '../Actions';
class AddReminder extends React.Component {
     constructor(props) {
          super(props);
          this.state = {
               taskName: '',
               style: {
                    display: 'hidden',
                    opacity: '1',
                    marginTop : '150px',
               },
          }
          this.onClose = this.onClose.bind(this);
          this.onChange = this.onChange.bind(this);
          this.saveTask = this.saveTask.bind(this);
     }
     onClose () {
          this.setState({
               style: {
                    display: 'hidden',
                    opacity: '0',
               }
          })
     }
     saveTask () {
          this.props.saveTask(this.state.taskName);
     }
     onChange(event) {
          this.setState({
               taskName: event.target.value,
          }, () => console.log(this.state.taskName))
     }
    render () {
        return (
             <div id='add-task-modal' className='modal' style={this.state.style}>
             <div className='modal-dialog'>
             <div className='modal-content'>
                  <div className='modal-header'>
                       <span>AddReminder</span>
                       <i className="fas fa-times" onClick={this.onClose}></i>
                  </div>
                  <div className='modal-body'>
                       <input className='add-title-box' onChange={this.onChange} type='text' placeholder='Add title and time'/>
                       <div>
                            <span className='reminder-label'>Reminder</span>
                       </div>
                  </div>
                  <div className='modal-footer'>
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

     }),
     dispatch => ({
          saveTask: taskName => dispatch(save_reminder(taskName, date))
     })
)(AddReminder);
