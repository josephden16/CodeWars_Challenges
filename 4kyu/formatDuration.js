/*
Your task in order to complete this Kata is to write a function which formats a duration,
given as a number of seconds, in a human-friendly way.
The function must accept a non-negative integer. If it is zero, it just returns "now".
Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.
*/


function formatDuration(seconds) {
  // Complete this function
  const SECONDS = 60;
  const HOUR_SECONDS = SECONDS * SECONDS;
  const DAY_SECONDS = 24 * HOUR_SECONDS;
  const YEAR_SECONDS = 365 * DAY_SECONDS;
  const availableTime = ["year", "day", "hour", "minute", "second"];
  let timeArr = [];
  timeArr.push(Math.floor(seconds / YEAR_SECONDS)); //add time in years  
  timeArr.push(Math.floor(seconds / DAY_SECONDS)); // add time in days
  timeArr.push(Math.floor());
}
