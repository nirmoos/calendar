export function currentDay ( state=initialCurrentDayState(), action ) {
    switch ( action.type ) {
        case 'UPDATE_CURRENT_DAY':
            return action.payload;
        default:
            return state;
    }
};

export function reminderList ( state={}, action ) {
    let newState;
    switch ( action.type ) {
        case 'ADD_REMINDER':
            let { payload: obj } = action;
            let { year, month } = obj.date;

            newState = { ...state };

            newState[ year ] !== undefined ? (
                newState[ year ][ month ] !== undefined ? (
                    newState[ year ][ month ] = combineAndSort( newState[ year ][ month ], obj )
                ) : (
                    newState[ year ][ month ] = combineAndSort( [], obj )
                )
            ) : (
                newState[ year ] = { [ month ]: combineAndSort( [], obj ) }
            );
            return newState;
        case 'DELETE_REMINDER':
            newState = deleteReminder( action.payload.date, action.payload.title, { ...state } );
            return newState;
        case 'TOGGLE_THE_REMINDER_FLAG':
            newState = toggleTheReminderFlag( action.payload.date, action.payload.title, { ...state } );
            return newState;
        default:
            return state;
    }
}

const initialCurrentDayState = ( date=new Date ()) => {
    return {
        year: date.getFullYear(),
        month: date.getMonth(),
        date: date.getDate(),
    }
}

function combineAndSort ( obj, date ) {
    for ( let i=0; i<obj.length; i++ ) {
        if ( Number( obj[i].date.date ) > Number( date.date.date ) ) {
            obj.splice( i, 0, date );
            return obj;
        }
    }
    return [ ...obj, date ];
}

function deleteReminder ( dateObj, title, state ) {
    let { year, month, date } = initialCurrentDayState( dateObj );
    let reminderArray = state[ year ][ month ];
    for ( let i=0; i<reminderArray.length; i++ ) {
        if ( reminderArray[ i ].date.date.toString() === date.toString() && reminderArray[ i ].title === title ) {
            reminderArray.splice( i, 1 );
            break;
        }
    }
    return state;
}

function toggleTheReminderFlag (dateObj, title, state ) {
    let { year, month, date } = initialCurrentDayState( dateObj );
    let reminderArray = state[ year ][ month ];
    for ( let i=0; i<reminderArray.length; i++ ) {
        if ( reminderArray[ i ].date.date.toString() === date.toString() && reminderArray[ i ].title === title ) {
            reminderArray[ i ].isCompleted = !reminderArray[ i ].isCompleted;
            break;
        }
    }
    return state;
}
