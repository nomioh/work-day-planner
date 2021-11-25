const e = require("express");

console.log(document);

// variable for storing schedule times
let hour = [
  {
    id: "0",
    hoursText: "9 am",
    time: "9",
    task: "",
  },
  {
    id: "1",
    hoursText: "10 am",
    time: "10",
    task: "",
  },
  {
    id: "2",
    hoursText: "11 am",
    time: "11",
    task: "",
  },
  {
    id: "3",
    hoursText: "12 pm",
    time: "12",
    task: "",
  },
  {
    id: "4",
    hoursText: "1 pm",
    time: "13",
    task: "",
  },
  {
    id: "5",
    hoursText: "2 pm",
    time: "14",
    task: "",
  },
  {
    id: "6",
    hoursText: "3 pm",
    time: "15",
    task: "",
  },
  {
    id: "7",
    hoursText: "4 pm",
    time: "16",
    task: "",
  },
  {
    id: "8",
    hoursText: "5 pm",
    time: "17",
    task: "",
  },
];

// init();
// loadDayPlanner();

function getCurrentDate() {
  let currentDate = moment().format("dddd, MMMM Do");
  $("#currentDate").text(getCurrentDate);

  // console.log(date);
}

// saves tasks in local storage
function saveTask() {
  localStorage.setItem("dailytask", JSON.stringify(myHour));
}

// sets data in local storage to the page
function displayTask() {
  myHour.forEach(function (_thisHour) {
    $(`#${_thisHour.id}`).val(_thisHour.reminder);
  });
}

function init() {
  var storedHour = JSON.parse(localStorage.getItem("myHour"));
  if (storedHour) {
    myHour = storedHour;
  }
  saveTask();
  displayTask();
}

// creates calender
hours.forEach(function (hour) {
  let hourRow = document.createElement("form");

  hourRow.classList = "row row2";
  hourRow.innerText = hour.hoursText;

  $(".container").append(hourRow);

  // time feild
  let hourField = $("<div>").text(`${hour.hours}${hour.meridiem}`).attr({
    class: "col-md-2 hours",
  });
});

var HourPlan = $("<div>").attr({ class: "col-md-9 description p-0" });

var planData = $("<textarea>");
hourPLan.append(planData);
planData.attr("id", hour.id);

if (hour.time < moment().format("HH")) {
  planData.attr({
    class: "past",
  });
} else if (thisHour.time === moment().format("HH")) {
  planData.attr({
    class: "present",
  });
} else if (thisHour.time > moment().format("HH")) {
  planData.attr({
    class: "future",
  });
}

// var currentHour = moment().hours();
// var meetingInfo = $("#meeting-info");
// header date
getCurrentDate();
