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

console.log(new Date().getFullYear());

document.getElementById("year").innerText = new Date().getFullYear();

document.getElementById("nav-items").classList.add("top-[32px]");
// document.getElementById("nav-items").style.top = 32 + "px";

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// window.addEventListener("scroll", (e) => console.log(e));
