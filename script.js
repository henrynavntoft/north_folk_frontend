/*Nav*/

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-900px";
  }
}

/*Preloader*/

let loader = document.querySelector(".preloader");

window.addEventListener("load", function () {
  setTimeout(function () {
    loader.classList.add("preloader-fade");
  }, 1000);
  setTimeout(function () {
    loader.style.display = "none";
  }, 1200);
});
