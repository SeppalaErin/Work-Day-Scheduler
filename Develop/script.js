// header shows current day of the week and month/day
// text blocks are changed dynamically based on time (past, present, future)
// when clicking on a timeblock, can enter an event
// when clicking on the save button for that timeblock, the text is saved to local storage
// when refreshing the page, the saved events persist

// variables

let DateTime = luxon.DateTime;

let now = DateTime.now();

// runtime
$("#currentDay").text(now.toLocaleString(DateTime.DATETIME_MED));