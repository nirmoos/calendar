export function update_current_day ( date ) {
    return {
        type: 'UPDATE_CURRENT_DAY',
        payload: date,
    }
}
export function save_reminder ( title, date, time ) {
     return  {
          type: 'ADD_REMINDER',
          payload: {
              title: title,
              date: date,
              time: time,
              isCompleted: false,
          }
     }
}
export function delete_remider ( date, title ) {
     return {
          type: 'DELETE_REMINDER',
          payload: {
              date: date,
              title: title,
          }
     }
}

export function toggle_the_reminder_flag ( date, title ) {
    return {
        type: 'TOGGLE_THE_REMINDER_FLAG',
        payload: {
            date: date,
            title: title,
        }
    }
}
