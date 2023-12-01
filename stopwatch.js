let tens = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;
let interval;
const secondsEl = document.getElementById("seconds");
const hoursEl = document.getElementById("hours");
const tensEl = document.getElementById("tens");
const minutesEl = document.getElementById("minutes");

function startStopwatch(){
  clearInterval(interval);
  interval = setInterval(startTimer,10);
};

function stopStopwatch(){
  clearInterval(interval)
};

function resetStopwatch(){
  clearInterval(interval)
  tens = "00"
  seconds = "00"
  tensEl.innerHTML = tens;
  secondsEl.innerHTML = seconds;
};

function startTimer(){
  tens++
  if (tens <= 9 ){
    tensEl.innerHTML =  "0" + tens;
  }
  if (tens > 9){
    tensEl.innerHTML = tens;
  }
  if (tens > 99){
    seconds++;
    secondsEl.innerHTML = "0" + seconds;
    tens = 0;
    tensEl.innerHTML =  "0" + tens;
  }
  if (seconds > 9){
    secondsEl.innerHTML = seconds;
  }
}