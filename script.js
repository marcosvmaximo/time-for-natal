import Countdown from "./countdown.js";

const time = document.querySelector("#time");
const timeForNatal = new Countdown("24 December 2022 23:59:59 GMT-0300");

const { days } = timeForNatal.total;
const { hours } = timeForNatal.total;
const { minutes } = timeForNatal.total;
const { seconds } = timeForNatal.total;

time.innerHTML = `<span class="number">${days}</span>dias <span class="number">:${hours}</span>horas <span class="number">:${minutes}</span>minutos <span class="number">:${seconds}</span>segundos`;

setInterval(() => {
  const { days } = timeForNatal.total;
  const { hours } = timeForNatal.total;
  const { minutes } = timeForNatal.total;
  const { seconds } = timeForNatal.total;
  time.innerHTML = `<span class="number">${days}</span>dias <span class="number">: ${hours}</span>horas <span class="number">: ${minutes}</span>minutos <span class="number">: ${seconds}</span>segundos`;
}, 1000);
