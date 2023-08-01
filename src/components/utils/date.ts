export const convertTimestamp = (Today: any) => {
  if (!(Today instanceof Date)) {
    Today = new Date(Today);
  }

  let date = Today;
  let hours = date.getHours();
  let minutes = date.getMinutes() < 10 ? "0" : "";
  minutes = minutes + date.getMinutes();
  let mm = date.getMonth() + 1;
  mm = mm < 10 ? "0" + mm : "" + mm;

  let dd = date.getDate() < 10 ? "0" : "";
  dd = dd + date.getDate();
  let yyyy = date.getFullYear();

  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const dayOfWeek = days[date.getDay()];
  const monthName = months[date.getMonth()];

  return `${dayOfWeek} ${dd} ${monthName}, ${yyyy}`;
};