import { connect } from 'react-redux';

import CalendarHeader from '../Components/CalendarHeader';

import { update_current_day } from '../Actions';

const getCurrentDate = () => {
    let date = new Date();
    return {
        year: date.getFullYear(),
        month: date.getMonth(),
        date: date.getDate(),
    }
}

const mapStatetoProps = state => ({
    currentDay: state.currentDay,
});

const mapDispatchtoProps = dispatch => ({
    goToPreviousMonth: (date) => dispatch(update_current_day(date)),
    goToNextMonth: (date) => dispatch(update_current_day(date)),
    changeToCurrent: () => dispatch(update_current_day(getCurrentDate()))
});
export default connect (
    mapStatetoProps,
    mapDispatchtoProps,
)(CalendarHeader);
