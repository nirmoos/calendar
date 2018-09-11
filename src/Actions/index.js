export function update_current_day ( date ) {
    return {
        type: 'UPDATE_CURRENT_DAY',
        year: date.year,
        month: date.month,
        date: date.date,
    }
}
export function save_reminder ( title, date, time ) {
     return  {
          type: 'ADD_REMINDER',
          title: title,
          date: date,
          time: time,
     }
}
export function delete_remider ( date, title ) {
     return {
          type: 'DELETE_REMINDER',
          date: date,
          title: title,
     }
}
