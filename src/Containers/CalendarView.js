import CalendarView from '../Components/CalendarView';
import { connect } from 'react-redux';

import { update_current_day } from '../Actions';

const mapStatetoProps = state => ( {
    currentDay: state.currentDay,
    reminderList: getReminderList( state.currentDay, state.reminderList ),
} );

const mapDispatchtoProps = dispatch => ( {
    goToPreviousMonth: ( date ) => dispatch( update_current_day(date) ),
    goToNextMonth: ( date ) => dispatch( update_current_day(date) ),
} );

export default connect (
    mapStatetoProps,
    mapDispatchtoProps,
)( CalendarView );

function getReminderList ( date, reminderList ) {
    return reminderList[ date.year ] !== undefined ? (
        reminderList[ date.year ][ date.month ] !== undefined ? (
            reminderList[ date.year ][ date.month ]
        ) : []
    ) : [];
}
