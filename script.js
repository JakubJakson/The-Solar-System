// Selectors
const main = document.querySelector(".main--container");
const mercNav = document.getElementById("mercury");
const names = document.querySelectorAll(".name");
const infos = document.querySelectorAll(".planet--info");
const specs = document.querySelectorAll(".planet--specs");
const planetImgs = document.querySelectorAll(".planet");
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
const icons = document.querySelectorAll(".icon");
// Planets
const planets = document.querySelectorAll(".planet--container");
const specItems = document.querySelectorAll(".spec");
// /////////

(async function () {
  try {
    const response = await fetch(
      "https://api.le-systeme-solaire.net/rest/bodies/"
    );
    const apiData = await response.json();
    const bodies = apiData.bodies;
    const planetBodies = bodies.filter((body) => body.isPlanet);
    const notPlanet = bodies.filter((body) => body.name === "Pluton");
    const allPlanets = planetBodies.push(notPlanet[0]);
    const allBodies = planetBodies.sort((a, b) => a.aphelion - b.aphelion);
    // console.log(planetBodies);
    console.log(allBodies);
    planets.forEach((planet, index) => {
      const apiSpecs = planet.querySelector(".planet--specs");
      // Specific Specs Selectors
      const apiDist = apiSpecs.querySelector(".dist");
      const apiMass = apiSpecs.querySelector(".mass");
      const apiTemp = apiSpecs.querySelector(".temp");
      const apiDia = apiSpecs.querySelector(".dia");
      const apiMoon = apiSpecs.querySelector(".moon");
      const apiGravity = apiSpecs.querySelector(".gravity");
      // ////////////////////////
      // Dynamic Distance
      const distP = apiDist.querySelector(".distP");
      distP.innerHTML = `${(allBodies[index].semimajorAxis / 1000000).toFixed(
        1
      )}M km`;
      // ////////////////////////
      // Dynamic Mass
      const massP = apiMass.querySelector(".massP");
      massP.innerHTML = `${allBodies[index].mass.massValue}x10<sup>${allBodies[index].mass.massExponent}</sup>`;
      // ///////////////////////
      // Dynamic Temperature
      const tempP = apiTemp.querySelector(".tempP");
      tempP.innerHTML = `${(allBodies[index].avgTemp - 273.15).toFixed(1)} C`;
      // //////////////////////
      // Dynamic Diameter
      const diaP = apiDia.querySelector(".diaP");
      diaP.innerHTML = `${allBodies[index].equaRadius.toFixed(1)} km`;
      // /////////////////////
      // Dynamic Moons
      const moonP = apiMoon.querySelector(".moonP");
      moonP.innerHTML = `${
        allBodies[index].moons === null ? 0 : allBodies[index].moons.length
      }`;
      // ////////////////////
      // Dynamic Gravity
      const gravP = apiGravity.querySelector(".gravP");
      gravP.innerHTML = `${allBodies[index].gravity} m/s<sup>2</sup>`;
      // ///////////////////
    });
  } catch (error) {
    console.error(error);
  }
})();

// Selects clicked dot and applies active class / Changes line width
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
// ////////

// Resets clicked icons to default state when listing through nav
function planetDefaultState() {
  icons.forEach((icon) => icon.classList.remove("icon--hide"));
  planetImgs.forEach((planet) => {
    planet.classList.remove("shift--left");
    planet.classList.remove("shift--right");
  });
  names.forEach((name) => name.classList.remove("hide"));
  infos.forEach((info) => info.classList.remove("text--shift"));
  specs.forEach((spec) => spec.classList.remove("spec--shift"));
}
// ////////

// Applies active class to current planet container
dots.forEach((dot, index) => {
  dot.addEventListener("click", function () {
    planets.forEach(function (planetCnt) {
      planetCnt.classList.remove("active--planet");
    });
    // Adding active class to planet container
    planets[index].classList.add("active--planet");
    // //////
    planetDefaultState();
  });
});
// ////////

// Controlls planet elements dynamicaly according to current active class
iconRight.addEventListener("click", rightClickHandler);

function rightClickHandler() {
  iconRight.classList.toggle("icon--fill");
  const currentPlanetCnt = document.querySelector(".active--planet");
  const currentPlanet = currentPlanetCnt.querySelector(".planet");
  const currentInfo = currentPlanetCnt.querySelector(".planet--info");
  const currentName = currentPlanetCnt.querySelector(".name");

  currentPlanet.classList.toggle("shift--left");
  currentInfo.classList.toggle("text--shift");
  currentName.classList.toggle("hide");
  iconLeft.classList.toggle("icon--hide");
}
// //////

// Controlls planet elements dynamicaly according to current active class
iconLeft.addEventListener("click", leftClickHandler);

function leftClickHandler() {
  iconDot.classList.toggle("orbiting");
  const currentPlanetCnt = document.querySelector(".active--planet");
  const currentPlanet = currentPlanetCnt.querySelector(".planet");
  const currentSpecs = currentPlanetCnt.querySelector(".planet--specs");
  const currentName = currentPlanetCnt.querySelector(".name");

  currentPlanet.classList.toggle("shift--right");
  currentSpecs.classList.toggle("spec--shift");
  currentSpecs.style.pointerEvents = "all";
  currentName.classList.toggle("hide");
  iconRight.classList.toggle("icon--hide");
}
// //////

// iconLeft.addEventListener("mouseenter", function () {
//   iconDot.classList.add("dot--size");
// });
// iconLeft.addEventListener("mouseleave", function () {
//   iconDot.classList.remove("dot--size");
// });

iconRight.addEventListener("mouseenter", function () {
  iconText.classList.add("text--bold");
});
iconRight.addEventListener("mouseleave", function () {
  iconText.classList.remove("text--bold");
});

specItems.forEach((spec) => {
  spec.addEventListener("click", function () {
    alert("clicked");
  });
});
