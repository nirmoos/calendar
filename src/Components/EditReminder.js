import React from 'react';
import { connect } from 'react-redux';
import { delete_remider, toggle_the_reminder_flag } from '../Actions';
import '../Stylesheets/EditReminder.css';

class EditReminder extends React.Component {
    constructor ( props ) {
        super ( props );
        this.state = {
            isVisible: false,
            currentHoverKey: '',
        };
    }
    onDeleteButtonClick = event => {
        event.stopPropagation();
        let index = Number ( event.currentTarget.dataset.id );
        let title = this.props.reminderList[index].title;
        let { year, month, date } = this.props.currentDate;
        let newDate = new Date( year, month, date );
        this.props.deleteReminder( newDate, title );
    }
    componentDidMount (event) {
        let modal = document.getElementById('myEditModal');
        window.onclick = (event) => {
            if (event.target === modal) {
                this.props.onEditDisable();
            }
        }
    }
    onMouseOver = event => {
        this.setState({
            isVisible: true,
            currentHoverKey: event.currentTarget.dataset.id.toString(),
        })
    }
    onMouseLeave = () => {
        this.setState({
            isVisible: false,
            currentHoverKey: '',
        })
    }
    toggleTheReminderFlag = event => {
        event.stopPropagation();
        let index = Number ( event.currentTarget.dataset.id );
        let title = this.props.reminderList[index].title;
        let { year, month, date } = this.props.currentDate;
        let newDate = new Date( year, month, date );
        this.props.toggleTheReminderFlag( newDate, title );
    }
    onChangeToEdit = event => {
        event.stopPropagation();
        this.props.onEditDisable();
        let index = Number ( event.currentTarget.dataset.id );
        let title = this.props.reminderList[index].title;
        let { year, month, date } = this.props.currentDate;
        let newDate = new Date( year, month, date );
        this.props.changeToEditMode( newDate, title );
    }
    render () {
        let days = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ];
        let { year, month, date } = this.props.currentDate;
        let dateObj = new Date ( year, month, date );
        let monthName = dateObj.toLocaleString( 'en-us', { month: 'long' } );
        let day = days[ dateObj.getDay() ];
        let reminderList = this.props.reminderList;
        if ( reminderList !== undefined )
            return (
            <div id='myEditModal' className='my-edit-modal'>
            <div className='my-edit-modal-content'>
                <div className='my-edit-modal-body'>
                    <span data-toggle='tooltip' data-placement='bottom' title='Close this dialogue box' className="close-edit" onClick={ this.props.onEditDisable }>
                        <i className='fas fa-times'></i>
                    </span>
                    <div className='count-shower'><span>{ reminderList.length }{' '}Reminders</span></div>
                </div>
                <div className='my-edit-modal-footer'>
                    <ul className='reminder-list'>
                    <li key={0}><i className='far fa-clock'></i><span>{day}{', '}{date}{' '}{monthName}</span></li>
                    {reminderList.map( ( arObj, index ) =>
                            <li key={ index+1 } data-id={ index+1 }  onMouseOver={ this.onMouseOver } onMouseLeave={ this.onMouseLeave } className='sigle-list-item'>
                                <i className='fas fa-bell'></i>
                                <span data-toggle='tooltip' data-placement='bottom' title={arObj.time} className={arObj.isCompleted ? 'strike-me-through' : ''}>
                                    { arObj.title }
                                </span>
                                {this.state.isVisible && ( this.state.currentHoverKey === (index + 1).toString() ) && (
                                    <div className='left-on-hover'>
                                        <span data-toggle='tooltip' data-placement='bottom' title='Edit this reminder' data-id={ index } className='list-buttons' onClick={ this.onChangeToEdit }><i className='fas fa-pen'></i></span>
                                        <span data-toggle='tooltip' data-placement='bottom' title='Delete this reminder' data-id={ index } onClick={ this.onDeleteButtonClick } className='list-buttons'><i className='fas fa-trash'></i></span>
                                        <span data-toggle='tooltip' data-placement='bottom' title='Mark as read' data-id={ index } onClick={ this.toggleTheReminderFlag } className='list-buttons'>
                                            { arObj.isCompleted ? <i class='fas fa-undo'></i> : <i className='fas fa-check'></i> }
                                        </span>
                                    </div>
                                )}
                            </li>
                        )
                    }
                </ul>
                </div>
            </div>
            </div>
        );
        else {
            this.props.onEditDisable();
            return null;
        }
    }
}

export default connect (
    ( state, ownProps ) => ({
        currentDate: ownProps.currentDay,
        reminderList: filterReminderList ( state.reminderList, ownProps.currentDay ),
    }),
    dispatch => ({
        deleteReminder: ( date, title ) => dispatch( delete_remider ( date, title ) ),
        toggleTheReminderFlag: ( date, title ) => dispatch ( toggle_the_reminder_flag ( date, title ) ),
    })
) (EditReminder);

function filterReminderList ( reminderListObj, currentDay, ownProps ) {
    let reminderList = reminderListObj[ currentDay.year ][ currentDay.month ];
    let position = Number ( currentDay.date );
    let i = 0; let len = 0;
    for ( let obj of reminderList ) {
        let day = Number ( obj.date.date );
        if ( day === position ) {
            for ( ; reminderList[ i ] !== undefined && Number ( reminderList[ i ].date.date ) === position; i++ ) {
                len ++;
            }
            return reminderList.slice( i-len, i );
        }
        i ++;
    }
}
