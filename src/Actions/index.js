export function update_current_day (date) {
    return {
        type: 'UPDATE_CURRENT_DAY',
        year: date.year,
        month: date.month,
        date: date.date,
    }
}
export function save_reminder (date, title) {
     return  {
          type: 'ADD_REMINDER',
          date: date,
          title: title,
     }
}
export function delete_remider (date, title) {
     return {
          type: 'DELETE_REMINDER',
          date: date,
          title: title,
     }
}
