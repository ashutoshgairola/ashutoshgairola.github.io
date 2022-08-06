var menu = document.querySelector("#menu");
var closeIcon = document.querySelector("#close");
var burger = document.querySelector("#burger");

burger.addEventListener("click", function () {
  menu.classList.remove("hidden");

  burger.classList.add("hidden");
});

closeIcon.addEventListener("click", function () {
  menu.classList.add("hidden");

  burger.classList.remove("hidden");
});

// clock

const deg = 6;
const hr = document.getElementById("hr");
const mn = document.getElementById("min");

const sc = document.getElementById("sec");

setInterval(() => {
  let day = new Date();
  let hh = day.getHours() * 30;
  let mm = day.getMinutes() * deg;
  let ss = day.getSeconds() * deg;

  hr.classList.add(`rotate-[${hh + mm / 12}deg]`);
  mn.classList.add(`rotate-[${mm}deg]`);
  sc.classList.add(`rotate-[${ss}deg]`);
}, 1000);
