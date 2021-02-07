function init() {
  // Declaration
  const mobileBtn = document.getElementById("mobile-cta"),
    nav = document.querySelector("nav"),
    mobileBtnExit = document.getElementById("mobile-exit");

  // Open side menu - mobile
  mobileBtn.addEventListener("click", () => {
    nav.classList.add("menu-btn");
  });

  // Close side menu - mobile
  mobileBtnExit.addEventListener("click", () => {
    nav.classList.remove("menu-btn");
  });

  // Event listener on Btn to scroll top
  var btnScrollToTop = document.querySelector(".to-top");
  btnScrollToTop.addEventListener("click", function () {
    window.scrollTo(0, 0);
  });

  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 380) {
      btnScrollToTop.classList.add("active");
    } else {
      btnScrollToTop.classList.remove("active");
    }
  });
}

init();
