import CalendarView from '../Components/CalendarView';

import { connect } from 'react-redux';

const mapStatetoProps = state => ({
    currentDay: state.currentDay,
    reminderList: state.reminderList,
});

const mapDispatchtoProps = dispatch => ({

});
export default connect (
    mapStatetoProps,
    mapDispatchtoProps,
)(CalendarView);
