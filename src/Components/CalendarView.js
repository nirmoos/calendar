import React from 'react';

// import AddReminder from './AddReminder';
import '../Stylesheets/CalendarView.css';
import MainTableBody from './TableBody';

class CalendarView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            year: this.props.currentDay.year,
            month: this.props.currentDay.month,
            date: this.props.currentDay.date,
        }
        this.onClick = this.onClick.bind(this);
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            year: nextProps.currentDay.year,
            month: nextProps.currentDay.month,
            date: nextProps.currentDay.date,
        });
    }
    onClick (event) {
        console.log(event.currentTarget.dataset.value);
        // document.getElementById("basicExampleModal").modal('show');
    }
    render() {
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
                        <MainTableBody onClick={this.onClick} reminderList={this.props.reminderList} year={this.state.year} month={this.state.month} />
                    </tbody>
                </table>
            </div>
        );
    }
}

export default CalendarView;
