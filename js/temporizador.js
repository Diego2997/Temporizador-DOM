const inputTime = document.getElementById("input-time");
const btnStart = document.getElementById("btn-start");
const btnPause = document.getElementById("btn-pause");
const btnReset = document.getElementById("btn-reset");
const timer = document.getElementById("timer");

let countdown;

function startTimer() {
  let time = parseInt(inputTime.value);
  if (isNaN(time)) {
    alert("Ingresa un valor válido");
    inputTime.value = "";
    return;
  }
  btnStart.disabled = true;
  btnPause.disabled = false;
  btnReset.disabled = false;
  countdown = setInterval(() => {
    time--;
    if (time < 0) {
      clearInterval(countdown);
      inputTime.value = "";
      btnStart.disabled = false;
      btnPause.disabled = true;
      btnReset.disabled = true;
      return;
    }
    timer.innerHTML = formatTime(time);
  }, 1000);
}

function pauseTimer() {
  clearInterval(countdown);
  btnStart.disabled = false;
  btnPause.disabled = true;
  btnReset.disabled = false;
}

function resetTimer() {
  clearInterval(countdown);
  inputTime.value = "";
  timer.innerHTML = "00:00:00";
  btnStart.disabled = false;
  btnPause.disabled = true;
  btnReset.disabled = true;
}

function formatTime(time) {
  let hours = Math.floor(time / 3600);
  let minutes = Math.floor((time % 3600) / 60);
  let seconds = Math.floor(time % 60);
  return (hours ? (hours > 9 ? hours : "0" + hours) + ":" : "") + (minutes ? (minutes > 9 ? minutes : "0" + minutes) + ":" : "00:") + (seconds > 9 ? seconds : "0" + seconds);
}

btnStart.addEventListener("click", (event) => {
  event.preventDefault();
  startTimer();
});

btnPause.addEventListener("click", (event) => {
  event.preventDefault();
  pauseTimer();
});

btnReset.addEventListener("click", (event) => {
  event.preventDefault();
  resetTimer();
});
