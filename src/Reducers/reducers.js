export function currentDay (state=initialCurrentDayState(), action) {
    switch (action.type) {
        case 'UPDATE_CURRENT_DAY':
            return {
                year: action.year,
                month: action.month,
                date: action.date,
            };
        default:
            return state;
    }
};

export function reminderList (state={}, action) {
    switch (action.type) {
        case 'ADD_REMINDER':
            let obj = { title: action.title, date: action.date, time: action.time  };
            let year = obj.date.year; let month = obj.date.month;
            let newState = {...state};

            newState[year] !== undefined ? (
                newState[year][month] !== undefined ? (
                    newState[year][month] = combineAndSort( newState[year][month], obj )
                ) : (
                    newState[year][month] = combineAndSort( [], obj )
                )
            ) : (
                newState[year] = { [month]: combineAndSort( [], obj ) }
            );
            return newState;
        case 'DELETE_REMINDER':
            //logic
            break;
        default:
            return state;
    }
}

const initialCurrentDayState = () => {
    let date = new Date();
    return {
        year: date.getFullYear(),
        month: date.getMonth(),
        date: date.getDate(),
    }
}


function combineAndSort ( obj, date ) {
    for (let i=0; i<obj.length; i++) {
        if ( Number( obj[i].date.date ) > Number( date.date.date ) ) {
            obj.splice(i, 0, date);
            return [...obj];
        }
    }
    return [...obj, date];
}
