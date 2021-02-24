// header shows current day of the week and month/day
// text blocks are changed dynamically based on time (past, present, future)
// when clicking on a timeblock, can enter an event
// when clicking on the save button for that timeblock, the text is saved to local storage
// when refreshing the page, the saved events persist

        // <!--variables-->
// Luxon Variables
let DateTime = luxon.DateTime;
let now = DateTime.now();

// Sets Current Date/Time to Header
let currentTime = moment().hour(); 
$("#currentDay").text(now.toLocaleString(DateTime.DATETIME_MED));

let saveBtn = $(".saveBtn");
let textarea = $(".description");


        // <!--functions-->

// function that changes timeblock colors based on current time
function checkTime() {
  for (let i = 0; i < textarea.length; i++) {
    if (textarea[i].getAttribute("value") > currentTime) {
      textarea[i].classList.add("future");
    } else if (textarea[i].getAttribute("value") < currentTime) {
      textarea[i].classList.add("past");
    } else {
      textarea[i].classList.add("present");
    }
  }
}        


        // <!--runtime-->

// run on page load
function init() {
  checkTime();
}
$(document).ready(init());