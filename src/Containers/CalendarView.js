import CalendarView from '../Components/CalendarView';

import { connect } from 'react-redux';

const mapStatetoProps = state => ({
    currentDay: state.currentDay,
    reminderList: getReminderList( state.currentDay, state.reminderList ),
});

const mapDispatchtoProps = dispatch => ({

});
export default connect (
    mapStatetoProps,
    mapDispatchtoProps,
)(CalendarView);

function getReminderList ( date, reminderList ) {
    return reminderList[date.year] !== undefined ? (
        reminderList[date.year][date.month] !== undefined ? (
            reminderList[date.year][date.month]
        ) : []
    ) : [];
}
