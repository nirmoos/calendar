import React from 'react';

import AddReminder from './AddReminder';
import '../Stylesheets/CalendarView.css';
import MainTableBody from './MainTableBody';

class CalendarView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentDay: this.props.currentDay,
            isVisible: false,
        }
        this.onClick = this.onClick.bind(this);
        this.onModalClose = this.onModalClose.bind(this);
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            currentDay: nextProps.currentDay,
        });
    }
    onClick (event) {
        this.clickedDate = event.currentTarget.dataset.value;
        this.setState({
            isVisible: true,
        })
    }
    onModalClose () {
        this.setState({
            isVisible: false,
        })
    }
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
                        <MainTableBody onClick={this.onClick} reminderList={this.props.reminderList} year={this.state.currentDay.year} month={this.state.currentDay.month} />
                    </tbody>
                </table>
                { this.state.isVisible && <AddReminder
                    onModalClose={this.onModalClose}
                    {...startOnDate}
                /> }
            </div>
        );
    }
}

export default CalendarView;
