const containerRef = document.querySelector(".container");
let activeRef = document.querySelector(".active");

containerRef.addEventListener("click", switchSlides);

function switchSlides(e) {
  if (e.target.classList.value !== "slide") return;
  activeRef.classList.remove("active");
  activeRef = e.target;
  e.target.classList.add("active");
}
