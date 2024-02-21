"use strict";
const showButton = document.getElementById("show-nav-bar-btn");
const mobileNav = document.getElementById("mobile-nav");

function showNavBar() {
  if (mobileNav.style.display === "none") {
    mobileNav.style.display = "block";
  } else {
    mobileNav.style.display = "none";
  }
};

showButton.addEventListener("click", showNavBar);