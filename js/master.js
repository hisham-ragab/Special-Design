// ***************************************//
//  1- Toggle-menu  //
// ***************************************//

let toggle = document.querySelector(".toggle-menu");
let links = document.querySelector(".landing .header .links");
toggle.onclick = function () {
  this.classList.toggle("open");
  links.classList.toggle("open");
};

// ***************************************//
//  2- Scrolling To Skills  //
// ***************************************//

let skillsSection = document.querySelector(".skills");
let skills = document.querySelectorAll(".skills .skill div span");

window.onscroll = function () {
  if (window.scrollY >= skillsSection.offsetTop - 200) {
    skills.forEach((sk) => {
      sk.style.width = sk.dataset.skill;
    });
  }
};

// ***************************************//
//  3- Scrolling To Links  //
// ***************************************//

let a = Array.from(document.querySelectorAll(".landing .header .links a"));
a.forEach((el) => {
  el.onclick = function () {
    window.scrollTo({
      left: 0,
      top: document.querySelector(el.dataset.a).offsetTop,
      behavior: "smooth",
    });
  };
});

// ***************************************//
//  4- Bullets  //
// ***************************************//

let bullets = Array.from(document.querySelectorAll(".bullets span"));
bullets.forEach((b) => {
  b.onclick = function () {
    window.scrollTo({
      left: 0,
      top: document.querySelector(`.${b.dataset.a}`).offsetTop,
      behavior: "smooth",
    });
  };
});

// ***************************************//
//  5- Toggle  //
// ***************************************//

let toggleSet = document.querySelector(".setting .toggle i");
let setting = document.querySelector(".setting");
toggleSet.onclick = function () {
  setting.classList.toggle("active");
  toggleSet.classList.toggle("fa-spin");
};

// ***************************************//
//  6- Colors  //
// ***************************************//

let colors = document.querySelectorAll(".colors span");

// LocalStorage Colors
if (window.localStorage.getItem("color")) {
  document.querySelector(
    ":root"
  ).style.cssText = `--main-color: ${window.localStorage.getItem("color")}`;
  colors.forEach((co) => co.classList.remove("active"));
  document
    .querySelector(`[data-color="${window.localStorage.getItem("color")}"]`)
    .classList.add("active");
}

colors.forEach((co) => {
  co.onclick = function () {
    colors.forEach((co) => co.classList.remove("active"));
    co.classList.add("active");
    window.localStorage.setItem("color", co.dataset.color);
    document.querySelector(
      ":root"
    ).style.cssText = `--main-color: ${co.dataset.color}`;
  };
});

// ***************************************//
//  7- Background  //
// ***************************************//

let landing = document.querySelector(".landing");
let background = document.querySelectorAll(".background span");
let yes1 = document.querySelector(".background .yes");
let no1 = document.querySelector(".background .no");
let backgroundN = 1;

// LocalStorage Colors
if (window.localStorage.getItem("background")) {
  if (window.localStorage.getItem("background") === "no") {
    landing.style.cssText = `background-image: url(../imgs/01.jpg)`;
    yes1.classList.remove("active");
    no1.classList.add("active");
  } else if (window.localStorage.getItem("background") === "yes") {
    set();
    no1.classList.remove("active");
    yes1.classList.add("active");
  }
}

background.forEach((span) => {
  span.onclick = function () {
    background.forEach((span) => span.classList.remove("active"));
    span.classList.add("active");
    if (yes1.classList.contains("active")) {
      window.localStorage.setItem("background", "yes");
      set();
    } else if (no1.classList.contains("active")) {
      window.localStorage.setItem("background", "no");
    }
  };
});
function set() {
  let set = setInterval(() => {
    no1.classList.contains("active") ? clearInterval(set) : true;
    backgroundN === 5 ? (backgroundN -= 5) : (backgroundN = backgroundN);
    backgroundN++;
    landing.style.cssText = `background-image: url(../imgs/0${backgroundN}.jpg)`;
  }, 10000);
}

// ***************************************//
//  8- Bullet  //
// ***************************************//

let bullet = document.querySelectorAll(".bullet span");
let yes2 = document.querySelector(".bullet .yes");
let no2 = document.querySelector(".bullet .no");

// LocalStorage Colors
if (window.localStorage.getItem("bullet") === "open") {
  no2.classList.remove("active");
  yes2.classList.add("active");
  document.querySelector(".bullets").classList.add("active");
} else if (window.localStorage.getItem("bullet") === "block") {
  yes2.classList.remove("active");
  no2.classList.add("active");
  document.querySelector(".bullets").classList.remove("active");
}

bullet.forEach((span) => {
  span.onclick = function () {
    bullet.forEach((span) => span.classList.remove("active"));
    span.classList.add("active");
    if (yes2.classList.contains("active")) {
      window.localStorage.setItem("bullet", "open");
      document.querySelector(".bullets").classList.add("active");
    } else {
      window.localStorage.setItem("bullet", "block");
      document.querySelector(".bullets").classList.remove("active");
    }
  };
});

// ***************************************//
//  9- Reset   //
// ***************************************//

let reset = document.querySelector(".reset");

reset.onclick = function () {
  window.localStorage.clear();
  colors.forEach((co) => co.classList.remove("active"));
  colors[0].classList.add("active");
  document.querySelector(
    ":root"
  ).style.cssText = `--main-color: ${colors[0].dataset.color}`;
  background.forEach((span) => span.classList.remove("active"));
  background[0].classList.add("active");
  set();
  no2.classList.remove("active");
  yes2.classList.add("active");
  document.querySelector(".bullets").classList.add("active");
};

// ***************************************//
//  10- Popup   //
// ***************************************//

let imgs = document.querySelectorAll(".gallery img");

imgs.forEach((img) => {
  img.onclick = function () {
    let div1 = document.createElement("div");
    let div2 = document.createElement("div");
    let h3 = document.createElement("h3");
    let im = document.createElement("img");
    let span = document.createElement("span");
    div1.className = "po";
    div2.className = "popup";
    im.src = img.src;
    h3.appendChild(document.createTextNode("Image"));
    span.appendChild(document.createTextNode("x"));
    div2.appendChild(h3);
    div2.appendChild(im);
    div2.appendChild(span);
    document.body.appendChild(div1);
    document.body.appendChild(div2);
    span.onclick = function () {
      div1.remove();
      div2.remove();
    };
  };
});

// ***************************************//
//  The End   //
// ***************************************//
