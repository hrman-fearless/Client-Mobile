export const getToday = (day) => {
  const weekdays = new Array(
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
  );
  return weekdays[day]
};

export const getMonthNow = (month) => {
  const months = new Array(
    "January", "February", "March", "April", "May", "June", "July", 'August', 'September', 'October', 'November', 'December'
  );
  return months[month]
};

export const hourNow = (hour) => {
  if (hour) {
    const today = new Date(hour)
    return today.getHours() + ":" + ((today.getMinutes() >= 10) ? today.getMinutes() : '0'+today.getMinutes())
  } else {
    return '-'
  }
}
