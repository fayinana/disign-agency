const navLinks = document.querySelector(".nav-links");
const menuOpenBtn = document.querySelector(".navbar .bx-menu");
const menuCloseBtn = document.querySelector(".nav-links .bx-x");
const htmlcssArrow = document.querySelector(".htmlcss-arrow");
const moreArrow = document.querySelector(".more-arrow");
const jsArrow = document.querySelector(".js-arrow");
const navbar = document.querySelector(".navbar");
const searchBox = document.querySelector(".search-box .bx-search");
const dateDOM = document.querySelector("#date");
const date = new Date();
dateDOM.innerHTML = date.getFullYear();
searchBox.addEventListener("click", () => {
  navbar.classList.toggle("showInput");
  if (navbar.classList.contains("showInput")) {
    searchBox.classList.replace("bx-search", "bx-x");
  } else {
    searchBox.classList.replace("bx-x", "bx-search");
  }
});
// sidebar open close js code
menuOpenBtn.onclick = function () {
  navLinks.style.left = "0";
};
menuCloseBtn.onclick = function () {
  navLinks.style.left = "-100%";
};
// sidebar submenu open close js code
htmlcssArrow.onclick = function () {
  navLinks.classList.toggle("show1");
};
moreArrow.onclick = function () {
  navLinks.classList.toggle("show2");
};
jsArrow.onclick = function () {
  navLinks.classList.toggle("show3");
};
// courosel
const pricings = document.querySelectorAll(".pricing");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const slides = document.querySelectorAll(".slide");
const body = document.querySelector("body");
if (body.clientWidth < 768) {
  pricings.forEach((pricing, index) => {
    pricing.style.left = `${index * 100}%`;
  });
  let counter = 0;
  nextBtn.addEventListener("click", () => {
    counter++;
    carousel();
  });
  prevBtn.addEventListener("click", () => {
    counter--;
    carousel();
  });
  slides.forEach((slide, index) => {
    slide.addEventListener("click", () => {
      counter = index;
      carousel();
    });
  });
  function carousel() {
    if (counter === pricings.length) {
      counter = 0;
    }
    if (counter < 0) {
      counter = pricings.length - 1;
    }
    slides.forEach((slide) => {
      slide.classList.remove("active");
      slides.forEach((s, i) => {
        if (counter === i) {
          s.classList.add("active");
        }
      });
    });
    pricings.forEach((pricing) => {
      pricing.style.transform = `translate(-${counter * 100}%)`;
    });
  }
}
