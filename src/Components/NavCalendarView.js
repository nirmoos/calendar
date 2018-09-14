import React from 'react';

import '../Stylesheets/NavCalendarView.css';
import TableBody from './TableBody';

class NavCalendarView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentDay: props.currentDay,
        }
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            currentDay: nextProps.currentDay,
        });
    }
    onClick = ( event ) => {
        let date = this.state.currentDay;
        date.date = event.currentTarget.dataset.value;
        this.props.updateCurrentDay(date);
        this.props.onModalClose();
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
                        <TableBody onClick={this.onClick} year={this.state.currentDay.year} month={this.state.currentDay.month} />
                    </tbody>
               </table>
          </div>
        );
    }
}

export default NavCalendarView;
