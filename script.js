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

const url2 =
  "https://henrymedia.dk/north_folk_backend/wp-json/wp/v2/gallery?_embed";

fetch(url2)
  .then((res) => res.json())
  .then((data) => handleProductList2(data));

// Just checking
function handleProductList2(data) {
  console.log(data);
  data.forEach(showProduct2);
}

function showProduct2(product) {
  //Selecting template and cloning
  const template2 = document.querySelector("template.template2").content;
  const clone = template2.cloneNode(true);
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

/*FETCH*/

const url =
  "https://henrymedia.dk/north_folk_backend/wp-json/wp/v2/calendar?_embed";

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
  clone.querySelector("p.calendar-date").textContent = product.calendar_date;
  clone.querySelector("p.calendar-location").textContent =
    product.calendar_location;
  clone.querySelector("p.calendar-venue").textContent = product.calendar_venue;
  clone.querySelector("a.calendar-btn").href = product.calendar_btn;
  //
  //Selection where i want the clone
  const parent = document.querySelector("main div.calendar");
  //Appending it
  parent.appendChild(clone);
}
