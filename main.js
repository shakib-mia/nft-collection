AOS.init({
  once: true,
});
import Lenis from "@studio-freight/lenis";
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

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

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

    document.getElementById("hour").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

    if (--timer < 0) {
      timer = duration;
      clearInterval(interval);
    }
  }, 1000);
}
startTimer(68400);

function createScrollDirectionTracker() {
  let scrollDirection = "up";
  let lastScrollY = 0;

  function handleScroll() {
    const currentScrollY = window.pageYOffset;

    // console.log();

    if (currentScrollY > lastScrollY) {
      scrollDirection = "down";
    } else {
      scrollDirection = "up";
    }

    lastScrollY = currentScrollY;

    if (scrollDirection === "down") {
      document.getElementById("navbar").style.top = "-10rem";

      document.getElementById("navbar").style.transition = "all 0.5s ease";

      //   document
      //     .getElementById("navbar")
      //     .classList.add("shadow-[0_0_80px_0_#2B245D21]");
    } else {
      if (currentScrollY > 0) {
        // console.log(true);
        document.getElementById("navbar").style.top = 0;
      } else {
        document.getElementById("navbar").style.top = 0 + "px";
        document.getElementById("navbar").style.transition = "all 0.5s ease";
      }
    }

    if (currentScrollY > 0) {
      document.getElementById("navbar").style.boxShadow =
        "0 0 20px 0 #2B245D21";
      document.getElementById("navbar").style.position = "fixed";
      // document.getElementById("navbar").style.backgroundColor = "#FFF";
    } else {
      document.getElementById("navbar").style.boxShadow = "none";
      // document.getElementById("navbar").style.position = "absolute";
      document.getElementById("navbar").style.top = 0 + "px";
      // document.getElementById("navbar").style.backgroundColor = "#FFF0";
    }
  }
  // console.log(scrollDirection);

  window.addEventListener("scroll", handleScroll);

  return {
    getScrollDirection: () => scrollDirection,
    cleanup: () => {
      window.removeEventListener("scroll", handleScroll);
    },
  };
}

createScrollDirectionTracker();
