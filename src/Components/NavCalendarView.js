import React from 'react';

import '../Stylesheets/NavCalendarView.css';
import TableBody from './TableBody';

class CalendarNavView extends React.Component {
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
        // console.log(event.currentTarget.dataset.value);
        this.props.updateCurrentDay();
    }
    render() {
        return (
           <div className='nav-table-container'>
                <table className='nav-table'>
                    <thead>
                        <tr>
                            <th>S</th>
                            <th>M</th>
                            <th>T</th>
                            <th>W</th>
                            <th>T</th>
                            <th>F</th>
                            <th>S</th>
                        </tr>
                    </thead>
                    <tbody>
                        <TableBody onClick={this.onClick} year={this.state.year} month={this.state.month} />
                    </tbody>
               </table>
          </div>
        );
    }
}

export default CalendarNavView;
