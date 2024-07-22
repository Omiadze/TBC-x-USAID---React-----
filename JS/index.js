import statistics from "./statistics.js";
import products from "./products.js";
import createBlueBtn from "./button.js";
import offers from "./offers.js";
import awards from "./awards.js";

// // Function to create and display products divs
const packageContainer = document.getElementById("package-container");

products.map((item) => {
  const div = document.createElement("div");
  div.className = "package-div";

  const title = document.createElement("h2");
  title.textContent = item.title;
  div.appendChild(title);

  //   // Create and append the text element
  //   const text = document.createElement("p");
  //   text.textContent = item.text;
  //   div.appendChild(text);

  //   // Create the image container
  const imgContainer = document.createElement("div");
  imgContainer.className = "package-img-container";

  const img = document.createElement("img");
  img.src = item.img;
  img.alt = item.title;
  imgContainer.appendChild(img);

  //   // Create the overlay
  const overlay = document.createElement("div");
  overlay.className = "overlay";

  //   // Create and append the arrow element
  const arrow = document.createElement("div");
  arrow.className = "little-arrow";
  arrow.innerHTML =
    '<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M9.7987 2.86675L14.4654 7.53341C14.732 7.80008 14.732 8.20008 14.4654 8.46675L9.7987 13.1334C9.53203 13.4001 9.13203 13.4001 8.86537 13.1334C8.5987 12.8667 8.5987 12.4667 8.86537 12.2001L12.3987 8.66675H1.9987C1.5987 8.66675 1.33203 8.40008 1.33203 8.00008C1.33203 7.60008 1.5987 7.33341 1.9987 7.33341H12.3987L8.86537 3.80008C8.73203 3.66675 8.66536 3.53341 8.66536 3.33341C8.66536 3.13341 8.73203 3.00008 8.86537 2.86675C9.13203 2.60008 9.53203 2.60008 9.7987 2.86675Z"></path></svg>';
  overlay.appendChild(arrow);

  const readMore = document.createElement("span");
  readMore.className = "read-more";
  readMore.textContent = "READ MORE";
  overlay.appendChild(readMore);

  imgContainer.appendChild(overlay);

  div.appendChild(imgContainer);

  packageContainer.appendChild(div);
});

// Function to create and display statistics divs
const statContainer = document.getElementById("statistics-container");

statistics.map((stat) => {
  const div = document.createElement("div");
  div.className = "stat";

  const amount = document.createElement("p");
  amount.textContent = stat.amount;
  div.appendChild(amount);

  const title = document.createElement("p");
  title.textContent = stat.title;
  div.appendChild(title);

  statContainer.appendChild(div);
});

// lurji gilaki
const bannerContent = document.getElementById("banner-content");
const bannerContent2 = document.getElementById("banner2-content");
const blueBtn = createBlueBtn();
const blueBtn2 = createBlueBtn();
blueBtn.textContent = "SUBSCRIBE";
blueBtn2.textContent = "LEARN MORE";
bannerContent.appendChild(blueBtn);
bannerContent2.appendChild(blueBtn2);
// offerebi
offers.map((offer) => {
  const offersContainer = document.getElementById("offers-container");
  const div = document.createElement("div");
  div.className = "offer-div";

  const imgContainer = document.createElement("div");
  imgContainer.className = "offer-img-container";
  const img = document.createElement("img");
  img.className = "offer-img";
  img.src = offer.img;
  img.alt = offer.title;
  imgContainer.appendChild(img);

  // logos damateba

  const logoDiv = document.createElement("div");
  logoDiv.className = "offers-logo-div";
  const logo = document.createElement("img");
  logo.classList = "offers-logo";
  logo.src = offer.logo;
  logo.alt = offer.title;
  logoDiv.appendChild(logo);
  imgContainer.appendChild(logoDiv);

  const offerContentDiv = document.createElement("div");
  offerContentDiv.className = "offer-content-div";
  const title = document.createElement("p");
  title.textContent = offer.title;
  const sale = document.createElement("h4");
  sale.textContent = offer.sale;
  offerContentDiv.appendChild(title);
  offerContentDiv.appendChild(sale);

  div.appendChild(imgContainer);
  div.appendChild(offerContentDiv);
  offersContainer.appendChild(div);
});

// produqtebi
products.map((item) => {
  const products = document.getElementById("products");
  const div = document.createElement("div");
  div.className = "products-div";

  const title = document.createElement("h2");
  title.textContent = item.title;
  div.appendChild(title);

  const text = document.createElement("p");
  text.textContent = item.text;
  div.appendChild(text);

  const imgContainer = document.createElement("div");
  imgContainer.className = "products-img-container";

  const img = document.createElement("img");
  img.src = item.img;
  img.alt = item.title;
  imgContainer.appendChild(img);
  div.appendChild(imgContainer);
  products.appendChild(div);
});

// awardebi
awards.map((award) => {
  const awardsContainer = document.getElementById("awards-container");
  const div = document.createElement("div");
  div.className = "awards-div";
  const logo = document.createElement("img");
  logo.src = award.logo;
  logo.alt = award.title;
  const title = document.createElement("h3");
  title.textContent = award.title;
  const category = document.createElement("p");
  category.textContent = award.category;
  div.appendChild(logo);
  div.appendChild(title);
  div.appendChild(category);
  awardsContainer.appendChild(div);
});