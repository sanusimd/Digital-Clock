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

setInterval(clock, 100);
