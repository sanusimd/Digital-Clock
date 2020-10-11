function clock() {
  const date = new Date();
  let hours = date.getHours();
  let mins = date.getMinutes();
  let secs = date.getSeconds();
  let midday = "AM";

  //   ADD ZERO TO TIME IF LESS 10
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (mins < 10) {
    mins = "0" + mins;
  }
  if (secs < 10) {
    secs = "0" + secs;
  }

  // CHECK IF MIDDAY
  midday = hours >= 12 ? "PM" : "AM";

  //   SELECT ELEMENT
  document.querySelector(".hours").innerHTML = hours;
  document.querySelector(".minutes").innerHTML = mins;
  document.querySelector(".seconds").innerHTML = secs;
  document.querySelector(".meridan").innerHTML = midday;
}

setInterval(clock, 1000);

// Set Alarm
let seconds = document.querySelector("#secs");
let minutes = document.querySelector("#mins");
let hours = document.querySelector("#hours");

// function for adding min and secs options to select element
function addMinsSecs(id) {
  let select = id;
  let mins = 59;
  for (let i = 0; i <= mins; i++) {
    select.options[select.options.length] = new Option(i < 10 ? "0" + i : i);
  }
}
addMinsSecs(seconds);
addMinsSecs(minutes);

// Function for adding hours options to select element
function addHour(id) {
  let select = id;
  let hours = 12;
  for (let i = 0; i <= hours; i++) {
    select.options[select.options.length] = new Option(i < 10 ? "0" + i : i);
  }
}
addHour(hours);
