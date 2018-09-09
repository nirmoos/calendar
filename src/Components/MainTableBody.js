import React from 'react';

const MainTableBody = ({year, month, onClick}) => {
    let currMonthPos = 1;
    let currMonthLastDay = new Date(
        month === 11 ? year + 1 : year,
        (month + 1) <= 11 ? (month + 1) : 0,
        0
    ).getDate();
    let currMonthStartIndex = new Date(
        year,
        month,
        1
    ).getDay();

    let prevMonthLastDay = new Date(
        year,
        month,
        0
    ).getDate();
    let prevMonthPos = prevMonthLastDay - currMonthStartIndex + 1;

    let nextMonthPos = 1;

    let tbody = [];
    let keyIndex = 0;
    for (let i=0; i<6; i++) {
        let tds = [];
        for (let j=0; j<7; j++) {
            if (prevMonthPos <= prevMonthLastDay) {
                tds.push(<td key={keyIndex++} className='prev-month-day'>{prevMonthPos++}</td>);
                continue;
            }
            if (currMonthPos <= currMonthLastDay) {
                tds.push(<td key={keyIndex++} data-value={currMonthPos} className='current-month-day' onClick={onClick} >{currMonthPos++}</td>);
                continue;
            }
            tds.push(<td key={keyIndex++} className='next-month-day'>{nextMonthPos++}</td>)
        }
        tbody.push(<tr key={i}>{tds}</tr>);
    }
    return tbody;
}

export default MainTableBody;
