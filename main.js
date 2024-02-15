import Lenis from "@studio-freight/lenis";
AOS.init();
// alert(window.innerWidth);
const lenis = new Lenis();

lenis.on("scroll", (e) => {
  if (e.targetScroll >= 40 || document.getElementById("nav-check").checked) {
    document.getElementById("navbar").style.backdropFilter = "blur(10px)";
  } else {
    document.getElementById("navbar").style.backdropFilter = "blur(0)";
  }
});

document.getElementById("nav-check").addEventListener("change", (e) => {
  if (e.target.checked) {
    document.getElementById("navbar").style.backdropFilter = "blur(10px)";
    document.getElementById("nav-items").style.height = "auto";
  } else {
    document.getElementById("navbar").style.backdropFilter = "blur(0)";
    document.getElementById("nav-items").style.height = 0;
  }
});

document.getElementById("year").innerText = new Date().getFullYear();

document.getElementById("nav-items").classList.add("top-[32px]");
// document.getElementById("nav-items").style.top = 32 + "px";

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// window.addEventListener("scroll", (e) => console.log(e));

function startTimer(duration) {
  var timer = duration,
    hours,
    minutes,
    seconds;
  var interval = setInterval(function () {
    hours = parseInt(timer / 3600, 10);
    minutes = parseInt((timer % 3600) / 60, 10);
    seconds = parseInt(timer % 60, 10);

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    // display.textContent = hours + ":" + minutes + ":" + seconds;
    document.getElementById("hour").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

    if (--timer < 0) {
      timer = duration;
      clearInterval(interval);
      // alert("Timer finished!");
    }
  }, 1000);
}
startTimer(68400);
