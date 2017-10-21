var navMain = document.querySelector(".main-nav");

var navToggle = document.querySelector(".main-nav__toggle");

var product = document.querySelector(".product");

var toCart = product.querySelectorAll(".to-cart");

var popupToCart = document.querySelector(".modal--to-cart");

var overlay = document.querySelector(".overlay");

navMain.classList.remove("main-nav--nojs");

navToggle.addEventListener("click", function() {
  if (navMain.classList.contains("main-nav--closed")) {
    navMain.classList.remove("main-nav--closed");
    navMain.classList.add("main-nav--opened");
  } else {
    navMain.classList.add("main-nav--closed");
    navMain.classList.remove("main-nav--opened");
  }
});

for (var i = 0; i <= toCart.length; i++) {
  toCart[i].addEventListener("click", function (event) {
    event.preventDefault();
    popupToCart.classList.add("modal--show");
    overlay.classList.add("overlay--show");
  });
};

window.addEventListener("keydown", function (event) {
  if (event.keyCode === 27) {
    if ((popupToCart.classList.contains("modal--show")) & (overlay.classList.contains("overlay--show"))) {
      popupToCart.classList.remove("modal--show");
      overlay.classList.remove("overlay--show");
    }
  }
});
