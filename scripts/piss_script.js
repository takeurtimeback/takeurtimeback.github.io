document.addEventListener("DOMContentLoaded", () => {
  const pissGif = document.getElementById("pissg-gif");
  const pissBtn = document.querySelector(".piss-btn");

  const showGif = () => {
    pissGif.style.display = "block";
  };

  const hideGif = () => {
    pissGif.style.display = "none";
  };

  pissBtn.addEventListener("mousedown", showGif);
  pissBtn.addEventListener("mouseup", hideGif);
  pissBtn.addEventListener("mouseleave", hideGif);
  pissBtn.addEventListener("touchstart", showGif);
  pissBtn.addEventListener("touchend", hideGif);
});