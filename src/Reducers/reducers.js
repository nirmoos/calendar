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

export function reminderList (state=[], action) {
    switch (action.type) {
        case 'ADD_REMINDER':
            return [...state, {task: action.task}, {date: action.date}];
        case 'DELETE_REMINDER':
            //logic
            break;
        default:
            return state;
    }
}

export function history (state=[], action) {
    switch (action.type) {
        case 'PUSH_TO_HISTORY':
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
