
import { connect } from 'react-redux';
import { update_current_day } from '../Actions';
import changeDate from '../Utils/Functions';
import NavCalendar from '../Components/NavCalendar';

const mapStatetoProps = state => ({
    currentDay: state.currentDay,
})

const mapDispatchtoProps = dispatch => ({
    updateCurrentDay: date => dispatch(update_current_day(date))
});

export default connect (
    mapStatetoProps,
    mapDispatchtoProps,
)(NavCalendar);
