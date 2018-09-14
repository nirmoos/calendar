import React from 'react';

import AddReminder from './AddReminder';
import EditReminder from './EditReminder';
import '../Stylesheets/CalendarView.css';
import MainTableBody from './MainTableBody';
import changeDate from '../Utils/Functions';

class CalendarView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentDay: this.props.currentDay,
            isVisible: false,
            isShowEdit: false,
        }
    }
    componentWillReceiveProps = ( nextProps ) => this.setState({ currentDay: nextProps.currentDay })
    componentDidMount = () => {
        window.addEventListener( 'wheel', this.dateChangeOnScroll );
    }
    dateChangeOnScroll = event => {
        if ( event.deltaY < 0 )
            this.props.goToPreviousMonth( changeDate( this.state.currentDay, true ) );
        else
            this.props.goToNextMonth( changeDate( this.state.currentDay, false ) );
    }
    onClick = ( event ) => {
        this.clickedDate = event.currentTarget.dataset.value;
        this.setState({
            isVisible: true,
        })
    }
    onModalClose = () => {
        this.setState({ isVisible: false });
        this.cemValue = '';
    }
    onEditEnable = ( obj ) => {
        this.setState({
            isShowEdit: true,
        });
        this.taskDetails = obj;
    }
    changeToEditMode = ( date, title ) => {
        this.setState({ isShowEdit: false, isVisible: true });
        this.clickedDate = date.getDate();
        this.cemValue = { date: date, title: title };
    }
    onEditDisable = () => this.setState({ isShowEdit: false })
    render() {
        let startOnDate = this.clickedDate !== undefined ? {clickedDate: this.clickedDate} : {};
        return (
            <div className='table-container'>
                <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th>SUN</th>
                            <th>MON</th>
                            <th>TUE</th>
                            <th>WED</th>
                            <th>THU</th>
                            <th>FRI</th>
                            <th>SAT</th>
                        </tr>
                    </thead>
                    <tbody>
                        <MainTableBody
                            onEditEnable={ this.onEditEnable }
                            onClick={ this.onClick }
                            reminderList={ this.props.reminderList }
                            year={ this.state.currentDay.year }
                            month={ this.state.currentDay.month }
                        />
                    </tbody>
                </table>
                { this.state.isVisible && <AddReminder
                    onModalClose={ this.onModalClose }
                    cemValue={ this.cemValue }
                    { ...startOnDate }
                /> }
                { this.state.isShowEdit && <EditReminder
                    onEditDisable={ this.onEditDisable }
                    changeToEditMode={ this.changeToEditMode }
                    taskDetails={ this.taskDetails }
                 /> }
            </div>
        );
    }
}

export default CalendarView;
