import React from 'react';

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
                        data-toggle='tooltip'
                        data-placement='bottom'
                        title='Click to add reminders'
                        key={ keyIndex++ }
                        data-value={ currMonthPos }
                        className={ getClassname ( year, month, currMonthPos ) }
                        onClick={ onClick } >
                        <span>{ currMonthPos++ }</span>
                        <ShowReminders
                            onClick={ props.onEditEnable }
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
    return tbody;
}

export default MainTableBody;

const ShowReminders = ( props ) => {
    let reminderList = props.reminderList;
    let position = props.position;
    let i = 0; let len = 0;
    for ( let obj of reminderList ) {
        let day = Number ( obj.date.date );
        if ( day === position ) {
            for ( ; reminderList[ i ] !== undefined && Number ( reminderList[ i ].date.date ) === position; i++ ) {
                len ++;
            }
            const span = <div
                key={0}
                data-toggle='tooltip'
                data-placement='bottom'
                title={reminderList[ i-1 ].title}
                data-day={ position }
                onClick={ props.onClick }
                className={'remainder-name '+ (reminderList[ i-1 ].isCompleted ? 'strike-me-through' : '')}
                >
                    { reminderList[ i-1 ].title }
            </div>;
            const div = <div key={1} className='total-reminders'><span
                data-toggle='tooltip'
                data-placement='bottom'
                title='Click to see all reminders'
                data-day={ position }
                onClick={ props.onClick }
                >
                    {len}
                </span>
            </div>;
            return [ span, div ];
        }
        i ++;
    }
    return null;
}

function getClassname ( year, month, day ) {
    let date = new Date ();
    if ( year === date.getFullYear() && month === date.getMonth() && day === date.getDate() )
        return 'curr-month-day current-day';
    return 'curr-month-day';
}
