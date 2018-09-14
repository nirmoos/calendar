const changeDate = ( { year, month, date }, flag ) => {
    let newDate;
    if ( flag ) {
        newDate = new Date (
            month === 0 ? year - 1 : year,
            month === 0 ? 11 : month - 1,
            date
        );
    }
    else {
        newDate = new Date (
            month === 11 ? year + 1 : year,
            month === 11 ? 0 : month + 1,
            date
        );
    }
    return {
        year: newDate.getFullYear(),
        month: newDate.getMonth(),
        date: newDate.getDate(),
    };
};
export default changeDate;
