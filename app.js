var colorChange = document.querySelector(":root");

function set_dark() {
  colorChange.style.setProperty("--back", "rgba(255, 255, 255, 0.567)");
  colorChange.style.setProperty("--outlet", "rgb(94, 2, 2)");
  colorChange.style.setProperty("--span", "black");
}
function set_light() {
  colorChange.style.setProperty("--back", "rgba(101, 93, 93, 0.441");
  colorChange.style.setProperty("--outlet", "rgb(242, 187, 6)");
  colorChange.style.setProperty("--span", "white");
}
