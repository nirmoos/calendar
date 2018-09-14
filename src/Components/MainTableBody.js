import React from 'react';

let rLIndex = 0;

const MainTableBody = ({ year, month, onClick, ...props }) => {

    let currMonthPos = 1;
    let currMonthLastDay = new Date (
        month === 11 ? year + 1 : year,
        ( month + 1 ) <= 11 ? ( month + 1 ) : 0,
        0
    ).getDate();
    let currMonthStartIndex = new Date (
        year,
        month,
        1
    ).getDay();

    let prevMonthLastDay = new Date (
        year,
        month,
        0
    ).getDate();
    let prevMonthPos = prevMonthLastDay - currMonthStartIndex + 1;

    let nextMonthPos = 1;

    let reminderList = props.reminderList;

    let tbody = [];
    let keyIndex = 0;
    for ( let i=0; i<6; i++ ) {
        let tds = [];
        for ( let j=0; j<7; j++ ) {
            if ( prevMonthPos <= prevMonthLastDay ) {
                tds.push( <td key={ keyIndex++ } className='prev-month-day'>{ prevMonthPos++ }</td> );
                continue;
            }
            if ( currMonthPos <= currMonthLastDay ) {
                tds.push(
                    <td
                        key={ keyIndex++ }
                        data-value={ currMonthPos }
                        className={getClassname( year, month, currMonthPos )}
                        onClick={ onClick } >
                        <span>{ currMonthPos++ }</span>
                        <ShowReminders
                            onClick={ obj => props.onEditEnable( obj )}
                            reminderList={ reminderList }
                            position={ currMonthPos-1 }
                        />
                    </td>
                );
                continue;
            }
            tds.push(<td key={ keyIndex++ } className='next-month-day'>{ nextMonthPos++ }</td>)
        }
        tbody.push(<tr key={ i }>{ tds }</tr>);
    }
    rLIndex = 0;
    return tbody;
}

export default MainTableBody;

const ShowReminders = ( props ) => {
    let reminderList = props.reminderList;
    let position = props.position;
    let myArray = [];
    let i = 0;
    if ( reminderList[ rLIndex ] !== undefined ) {
        if ( Number( reminderList[ rLIndex ].date.date ) === position ) {
            do {
                myArray.push(
                    <div
                        key={ i++ }
                        onClick={
                            ( i => e => {
                                e.stopPropagation();
                                props.onClick( reminderList[ i ] );
                            } )( rLIndex )
                        }
                        className='remainder-name'
                        >
                        { reminderList[ rLIndex++ ].title }
                    </div>);
            } while ( reminderList[ rLIndex ] !== undefined && Number( reminderList[ rLIndex ].date.date ) === position );
        }
    }
    return myArray;
}

function getClassname ( year, month, day ) {
    let date = new Date ();
    if ( year === date.getFullYear() && month === date.getMonth() && day === date.getDate() )
        return 'curr-month-day current-day';
    return 'curr-month-day';
}
