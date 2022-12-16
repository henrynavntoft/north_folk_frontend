/*NAVAGATION*/

// window.onscroll = function () {
//   scrollFunction();
// };

// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     document.getElementById("navbar").style.top = "0";
//   } else {
//     document.getElementById("navbar").style.top = "-100vh";
//   }
// }

/*PRELOADER*/

let loader = document.querySelector(".preloader");

window.addEventListener("load", function () {
  setTimeout(function () {
    loader.classList.add("preloader-fade");
  }, 1000);
  setTimeout(function () {
    loader.style.display = "none";
  }, 1200);
});

/*FETCH*/

const url =
  "https://henrymedia.dk/north_folk_backend/wp-json/wp/v2/gallery?_embed";

fetch(url)
  .then((res) => res.json())
  .then((data) => handleProductList(data));

// Just checking
function handleProductList(data) {
  console.log(data);
  data.forEach(showProduct);
}

function showProduct(product) {
  //Selecting template and cloning
  const template = document.querySelector("template").content;
  const clone = template.cloneNode(true);
  // Change stuff
  clone.querySelector("img").src =
    product._embedded[
      "wp:featuredmedia"
    ][0].media_details.sizes.full.source_url;
  //
  //Selection where i want the clone
  const parent = document.querySelector("main div.fetch-gallery");
  //Appending it
  parent.appendChild(clone);
}
