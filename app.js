// Clock function
function clock() {
  const date = new Date();
  let hours = date.getHours();
  let mins = date.getMinutes();
  let secs = date.getSeconds();
  let midday = "AM";
  let currenTime;

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
  let h = (document.querySelector(".hours").innerHTML = hours);
  let m = (document.querySelector(".minutes").innerHTML = mins);
  let s = (document.querySelector(".seconds").innerHTML = secs);
  let d = (document.querySelector(".meridan").innerHTML = midday);

  currenTime = `${h} : ${m} : ${s} ${d}`;

  if (currenTime === alarmElement) {
    console.log("time for solat ");
  }
}
setInterval(clock, 1000);

// Set Alarm option value
// Alarm variable
let second = document.querySelector("#secs");
let minute = document.querySelector("#mins");
let hour = document.querySelector("#hours");
let ampm = document.querySelector("#ampm");

// function for adding min and secs options to select element
function addMinsSecs(id) {
  let select = id;
  let mins = 59;
  for (let i = 0; i <= mins; i++) {
    select.options[select.options.length] = new Option(i < 10 ? "0" + i : i);
  }
}

// Function for adding hours options to select element
function addHour(id) {
  let select = id;
  let hours = 23;
  for (let i = 0; i <= hours; i++) {
    select.options[select.options.length] = new Option(i < 10 ? "0" + i : i);
  }
}
addHour(hour);
addMinsSecs(second);
addMinsSecs(minute);

const startAlarm = document.querySelector("#set-alarm");
let activeAlarm = false;
let alarmElement;
// let alarmElement;Addd event listener to start alarm
startAlarm.addEventListener("click", function () {
  // disabled select option when click on Start alarm Button
  if (activeAlarm === false) {
    hour.disabled = true;
    minute.disabled = true;
    second.disabled = true;
    ampm.disabled = true;

    // create variable Alarm element 
    alarmElement = `${hour.value} : ${minute.value} : ${second.value} ${ampm.value}`;
    this.textContent = "Clear Alarm";
    activeAlarm = true;
  } else {
    hour.disabled = false;
    minute.disabled = false;
    second.disabled = false;
    ampm.disabled = false;
    this.textContent = "Set Alarm";
    activeAlarm = false;
  }
});
