import statistics from "./statistics.js";
import products from "./products.js";
import createBlueBtn from "./button.js";
import offers from "./offers.js";
import awards from "./awards.js";

// blue button for the banner1 and banner2
const bannerContent = document.getElementById("banner-content");
const bannerContent2 = document.getElementById("banner2-content");
const blueBtn = createBlueBtn();
const blueBtn2 = createBlueBtn();
blueBtn.textContent = "SUBSCRIBE";
blueBtn2.textContent = "LEARN MORE";
bannerContent.appendChild(blueBtn);
bannerContent2.appendChild(blueBtn2);

// function that it responsible for the package section container
const packageContainer = document.getElementById("package-container");

products.map((item) => {
  const div = document.createElement("div");

  const imgContainer = document.createElement("div");
  imgContainer.className = "package-img-container";

  const img = document.createElement("img");
  img.src = item.img;
  img.alt = item.title;
  // this is for the grid styling
  imgContainer.appendChild(img);
  if (item.index === 3) {
    div.className = "package-div-3";
  } else if (item.index === 2) {
    div.className = "package-div-2";
  } else {
    div.className = "package-div-1";
  }
  console.log(div.className);
  // content that is displayed on top of the img
  const overlay = document.createElement("div");
  const title = document.createElement("h2");
  title.textContent = item.title;
  overlay.className = "overlay";
  const readMore = document.createElement("div");
  readMore.className = "read-more";
  readMore.innerHTML =
    '<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M9.7987 2.86675L14.4654 7.53341C14.732 7.80008 14.732 8.20008 14.4654 8.46675L9.7987 13.1334C9.53203 13.4001 9.13203 13.4001 8.86537 13.1334C8.5987 12.8667 8.5987 12.4667 8.86537 12.2001L12.3987 8.66675H1.9987C1.5987 8.66675 1.33203 8.40008 1.33203 8.00008C1.33203 7.60008 1.5987 7.33341 1.9987 7.33341H12.3987L8.86537 3.80008C8.73203 3.66675 8.66536 3.53341 8.66536 3.33341C8.66536 3.13341 8.73203 3.00008 8.86537 2.86675C9.13203 2.60008 9.53203 2.60008 9.7987 2.86675Z"></path></svg> <p>READ MORE</p>';
  overlay.appendChild(title);
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

  const amount = document.createElement("h1");
  amount.textContent = stat.amount;

  const title = document.createElement("p");
  title.textContent = stat.title;

  div.appendChild(amount);
  div.appendChild(title);
  statContainer.appendChild(div);
});

// offers container
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

  // add logo to the offers div
  const logoDiv = document.createElement("div");
  logoDiv.className = "offers-logo-div";
  const logo = document.createElement("img");
  logo.classList = "offers-logo";
  logo.src = offer.logo;
  logo.alt = offer.title;
  logoDiv.appendChild(logo);
  imgContainer.appendChild(logoDiv);
  // I also created content divs for offers
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

// products section
products.map((item) => {
  const products = document.getElementById("products");
  const div = document.createElement("div");
  div.className = "products-div";

  const imgContainer = document.createElement("div");
  imgContainer.className = "products-img-container";
  const img = document.createElement("img");
  img.src = item.img;
  img.alt = item.title;
  img.className = "products-img";
  imgContainer.appendChild(img);
  div.appendChild(imgContainer);
  // content for the products
  const productsContentDiv = document.createElement("div");
  productsContentDiv.className = "products-content-div";
  const title = document.createElement("h2");
  title.textContent = item.title;
  productsContentDiv.appendChild(title);
  const text = document.createElement("p");
  text.textContent = item.text;

  productsContentDiv.appendChild(title);
  productsContentDiv.appendChild(text);

  div.appendChild(productsContentDiv);
  products.appendChild(div);
});

// awards section
awards.map((award) => {
  const awardsContainer = document.getElementById("awards-container");
  const div = document.createElement("div");
  div.className = "awards-div";
  const logo = document.createElement("img");
  logo.src = award.logo;
  logo.alt = award.title;
  logo.className = "awards-logo";
  const awardsContentDiv = document.createElement("div");
  awardsContentDiv.classList = "awards-content-div";
  const title = document.createElement("h3");
  title.textContent = award.title;
  const category = document.createElement("p");
  category.textContent = award.category;
  div.appendChild(logo);
  awardsContentDiv.appendChild(title);
  awardsContentDiv.appendChild(category);
  div.appendChild(awardsContentDiv);
  awardsContainer.appendChild(div);
});

// slider
const initSlider = (containerSelector, scrollbarSelector, arrowsSelector) => {
  const sliderContainer = document.querySelector(containerSelector);
  const sliderScrollbar = document.querySelector(scrollbarSelector);
  const sliderScrollThumb = sliderScrollbar.querySelector(".scrollbar-thumb");
  const scrollbarTrack = sliderScrollbar.querySelector(".scrollbar-track");
  const sliderBtns = document.querySelectorAll(arrowsSelector + " .arrow");

  const updateMaxScrollLeft = () =>
    sliderContainer.scrollWidth - sliderContainer.clientWidth;
  let maxScrollLeft = updateMaxScrollLeft();

  // mouse down
  sliderScrollThumb.addEventListener("mousedown", (e) => {
    const startX = e.clientX;
    const thumbPosition = sliderScrollThumb.offsetLeft;

    const handleMouseMove = (e) => {
      const deltaX = e.clientX - startX;
      const newsliderScrollThumb = thumbPosition + deltaX;
      const maxThumbPosition =
        scrollbarTrack.getBoundingClientRect().width -
        sliderScrollThumb.offsetWidth;

      const boundedPosition = Math.max(
        0,
        Math.min(maxThumbPosition, newsliderScrollThumb)
      );
      const scrollPosition =
        (boundedPosition / maxThumbPosition) * maxScrollLeft;

      sliderScrollThumb.style.left = `${boundedPosition}px`;
      sliderContainer.scrollLeft = scrollPosition;
    };

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  });

  sliderBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const direction = btn.id === "prev-arrow" ? -1 : 1;
      const scrollAmount = sliderContainer.clientWidth * direction;
      sliderContainer.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });
  });

  const handleSlideBtn = () => {
    sliderBtns[0].style.display =
      sliderContainer.scrollLeft <= 0 ? "hidden" : "block";
    sliderBtns[1].style.display =
      sliderContainer.scrollLeft >= maxScrollLeft ? "hidden" : "block";
  };

  const updateScrollThumbPosition = () => {
    const scrollPosition = sliderContainer.scrollLeft;
    const thumbPosition =
      (scrollPosition / maxScrollLeft) *
      (scrollbarTrack.clientWidth - sliderScrollThumb.offsetWidth);
    sliderScrollThumb.style.left = `${thumbPosition}px`;
  };

  sliderContainer.addEventListener("scroll", () => {
    handleSlideBtn();
    updateScrollThumbPosition();
  });

  window.addEventListener("resize", () => {
    maxScrollLeft = updateMaxScrollLeft();
    updateScrollThumbPosition();
  });
};

// argumennts for the initSlider function
window.addEventListener("load", () => {
  initSlider("#offers-container", "#offers-scrollbar", "#offers-arrows");
  initSlider("#awards-container", "#awards-scrollbar", "#awards-arrows");
});

// create drop-down menu
const dropDownMenu = document.getElementById("drop-down-menu");
const dropDownProducts = document.getElementById("drop-down-products");
const dropDownOffers = document.getElementById("drop-down-offers");
const dropDownConcept = document.getElementById("drop-down-concept");
const dropDownLogo = `<div class="drop-down-logo fade-in"><img src="./src/Img/dropDownLogo.png" alt="drop down logo" /> <div> 
                            <svg data-v-562b0aec="" width="20" height="21" viewbox="0 0 20 21" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path data-v-562b0aec="" d="M15.8342 4.04761H7.50091C7.04258 4.04761 6.66758 4.42261 6.66758 4.88094C6.66758 5.33927 7.04258 5.71427 7.50091 5.71427H13.8259L3.57578 15.9643C3.25078 16.2893 3.25078 16.8143 3.57578 17.1393C3.74245 17.3059 3.95078 17.3809 4.16744 17.3809C4.38411 17.3809 4.59244 17.2976 4.75911 17.1393L15.0009 6.88927V13.2143C15.0009 13.6726 15.3759 14.0476 15.8342 14.0476C16.2925 14.0476 16.6675 13.6726 16.6675 13.2143V4.88094C16.6675 4.42261 16.2925 4.04761 15.8342 4.04761Z"></path></svg>
                            <h4>DIGITAL BANKING</h4>
                            </div>
                            </div>`;

const createproductsDropDown = () => {
  dropDownMenu.style.display = "flex";
  dropDownMenu.innerHTML = `${dropDownLogo}
                            <div> 
                            <ul class="products-ul slide-in">
                                      <li >Overview</li>
                                      <li>Packages</li>
                                      <li>Privite banker</li>                                     
                            </ul>
                            </div>`;
};
const createoffersDropDown = () => {
  dropDownMenu.style.display = "flex";
  dropDownMenu.innerHTML = `${dropDownLogo}
                            <div> 
                            <ul class="offers-ul slide-in">
                                      <li>Overview</li>
                                      <li>Offers</li>
                                      <li>Events</li>                                     
                            </ul>
                            </div>`;
};
const createconceptDropDown = () => {
  dropDownMenu.style.display = "flex";
  dropDownMenu.innerHTML = `${dropDownLogo}
                            <div> 
                            <ul class="concept-ul slide-in">
                                      <li>Overview</li>
                                      <li>Cafe</li>
                                      <li>Library</li>
                                      <li>TBC Concept Branches</li>                                   
                            </ul>
                            </div>`;
};

dropDownProducts.addEventListener("click", createproductsDropDown);
dropDownOffers.addEventListener("click", createoffersDropDown);
dropDownConcept.addEventListener("click", createconceptDropDown);

const hideDropdown = (event) => {
  if (
    !dropDownMenu.contains(event.target) &&
    event.target !== dropDownProducts &&
    event.target !== dropDownOffers &&
    event.target !== dropDownConcept
  ) {
    dropDownMenu.style.display = "none";
  }
};

document.addEventListener("click", hideDropdown);
