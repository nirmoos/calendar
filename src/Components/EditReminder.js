import React from 'react';
import { connect } from 'react-redux';
import { delete_remider } from '../Actions';
import '../Stylesheets/EditReminder.css';

class EditReminder extends React.Component {
    onDeleteButtonClick = ( event, dateObj ) => {
        event.stopPropagation();
        this.props.deleteReminder( dateObj, this.props.taskDetails.title );
        this.props.onEditDisable();
    }
    componentDidMount (event) {
        let modal = document.getElementById('myEditModal');
        window.onclick = (event) => {
            if (event.target === modal) {
                this.props.onEditDisable();
            }
        }
    }
    render () {
        let days = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ];
        let { year, month, date } = this.props.taskDetails.date;
        let dateObj = new Date ( year, month, date );
        let monthName = dateObj.toLocaleString( 'en-us', { month: 'long' } );
        let day = days[ dateObj.getDay() ];
        return (
            <div id='myEditModal' className='my-edit-modal'>
            <div className='my-edit-modal-content'>
                <div className='my-edit-modal-body'>
                    <div className='button-cont'>
                        <span
                            className='delete-task'
                            onClick={ event => this.onDeleteButtonClick( event, dateObj ) }
                            >
                            <i className='fas fa-trash'></i>
                        </span>
                        <span className="close-edit" onClick={ this.props.onEditDisable }>
                            <i className='fas fa-times'></i>
                        </span>
                    </div>
                    <div className='edit-button' onClick={ () => this.props.changeToEditMode( dateObj, this.props.taskDetails.title ) }>
                        <i className='far fa-edit'></i>
                    </div>
                    <div className='task-name'>{ this.props.taskDetails.title }</div>
                </div>
                <div className='my-edit-modal-footer'>
                    <div className='task-date'>
                        {day}
                        {', '}
                        {date}
                        {' '}
                        {monthName}
                        {' '}
                        {year}
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default connect (
    state => ({}),
    dispatch => ({
        deleteReminder: ( date, title ) => dispatch(delete_remider( date, title ))
    })
) (EditReminder);
