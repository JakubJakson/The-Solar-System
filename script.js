const main = document.querySelector(".main--container");
const mercNav = document.getElementById("mercury");
const planet = document.querySelector(".planet");
const dots = document.querySelectorAll(".nav--dot");
const iconRight = document.querySelector(".icon--right");
const iconLeft = document.querySelector(".icon--left");
const navLine = document.querySelector(".line");
const iconDot = document.querySelector(".icon--dot");
const iconText = document.querySelector(".icon--text");
const planetInfo = document.querySelector(".planet--info");
const planetSpecs = document.querySelector(".planet--specs");
const planetName = document.querySelector(".name");
const entry = document.querySelector(".entry");
// Planets
const planets = document.querySelectorAll(".planet--container");

dots.forEach((dot, index) => {
  dot.addEventListener("click", function () {
    if (index === 0) {
      merc.classList.add("active--planet");
    } else if (index === 1) {
      venus.classList.add("active--planet");
    } else if (index === 2) {
      ea.classList.add("active--planet");
    }
  });
});

dots.forEach((dot, index) => {
  dot.addEventListener("click", function () {
    dots.forEach(function (dot) {
      dot.classList.remove("active--dot");
    });
    dot.classList.add("active--dot");

    if (index === 0) {
      navLine.style.width = "0%";
    } else if (index === 1) {
      navLine.style.width = "10%";
    } else if (index === 2) {
      navLine.style.width = "25%";
    } else if (index === 3) {
      navLine.style.width = "34%";
    } else if (index === 4) {
      navLine.style.width = "50%";
    } else if (index === 5) {
      navLine.style.width = "60%";
    } else if (index === 6) {
      navLine.style.width = "75%";
    } else if (index === 7) {
      navLine.style.width = "85%";
    } else if (index === 8) {
      navLine.style.width = "100%";
    }
  });
});

dots.forEach((dot, index) => {
  dot.addEventListener("click", function () {
    planets.forEach(function (planet) {
      planet.classList.remove("active--planet");
    });
    planets[index].classList.add("active--planet");
  });
});

iconRight.addEventListener("click", function () {
  planet.classList.toggle("shift--left");
  planetInfo.classList.toggle("text--shift");
  planetName.classList.toggle("hide");
  iconLeft.classList.toggle("icon--hide");
});

iconLeft.addEventListener("click", function () {
  planet.classList.toggle("shift--right");
  planetSpecs.classList.toggle("spec--shift");
  planetName.classList.toggle("hide");
  iconRight.classList.toggle("icon--hide");
});

iconLeft.addEventListener("mouseenter", function () {
  iconDot.classList.add("dot--size");
});
iconLeft.addEventListener("mouseleave", function () {
  iconDot.classList.remove("dot--size");
});

iconRight.addEventListener("mouseenter", function () {
  iconText.classList.add("text--bold");
});
iconRight.addEventListener("mouseleave", function () {
  iconText.classList.remove("text--bold");
});
