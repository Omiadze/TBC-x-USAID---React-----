const createmobileDropDowns = () => {
  const div = document.createElement("div");
  div.className = "drop-down-main-div";

  const dropDownTop = document.createElement("div");
  dropDownTop.className = "drop-down-top";

  const dropDownbottom = document.createElement("div");
  dropDownbottom.className = "drop-down-bottom";
  const mobileProductsDiv = document.createElement("div");
  mobileProductsDiv.className = "mobile-products-div";
  const mobileOffersDiv = document.createElement("div");
  mobileOffersDiv.className = "mobile-offers-div";
  const mobileConceptDiv = document.createElement("div");
  mobileConceptDiv.className = "mobile-concept-div";
  const mobileContactDiv = document.createElement("div");
  mobileContactDiv.className = "mobile-contact-div";
  mobileProductsDiv.innerHTML = `<strong>Products</strong>
                                <a href="#">Overview</a>
                                <a href="#">Packages</a>
                                <a href="#">Privite banker</a>`;
  mobileOffersDiv.innerHTML = `<strong>Lifestyles</strong>
                                <a href="#">Overview</a>        
                                <a href="#">Offers</a>
                                <a href="#">Events</a>`;
  mobileConceptDiv.innerHTML = `<strong>Concept space</strong>
                                <a href="#">Overview</a>
                                <a href="#">Library</a>
                                <a href="#">Cafe</a>`;
  mobileContactDiv.innerHTML = `<strong>Contact us</strong>
                                    <div class="tel">
                                        <img class="icon" src="./src/Img/tel.png" alt="phone icon" />
                                        <a href="#">+995 32 2 27 27 00</a>
                                    </div>
                                    <div class="mail">
                                        <img class="icon" src="./src/Img/mail.png" alt="mail icon" />
                                        <a href="#">info@tbcconcept.ge</a>
                                    </div>
                                    <div class="location">
                                        <img
                                        class="icon"
                                        src="./src/Img/location.png"
                                        alt="location icon"
                                        />
                                        <a href="#">Branches</a>
                                </div>
                                <div class="follow-us">
              <strong>Follow us</strong>
              <div>
                <a class="fb" href="https://www.facebook.com/tbcconcept/">
                  <svg
                    class="icon"
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_167_7547)">
                      <path
                        d="M9.83464 9.00163H11.5013L12.168 6.33496H9.83464V5.00163C9.83464 4.31496 9.83464 3.66829 11.168 3.66829H12.168V1.42829C11.9506 1.39963 11.13 1.33496 10.2633 1.33496C8.4533 1.33496 7.16797 2.43963 7.16797 4.46829V6.33496H5.16797V9.00163H7.16797V14.6683H9.83464V9.00163Z"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_167_7547">
                        <rect
                          width="16"
                          height="16"
                          fill="white"
                          transform="translate(0.5 0.000976562)"
                        ></rect>
                      </clipPath>
                    </defs>
                  </svg>
                </a>
                <a class="insta" href="https://www.instagram.com/tbc_concept/">
                  <svg
                    class="icon"
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    class="bi bi-instagram"
                  >
                    <path
                      d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>`;
  dropDownTop.appendChild(mobileProductsDiv);
  dropDownTop.appendChild(mobileOffersDiv);
  dropDownTop.appendChild(mobileConceptDiv);
  dropDownbottom.appendChild(mobileContactDiv);
  div.appendChild(dropDownTop);
  div.appendChild(dropDownbottom);
  return div;
};

export default createmobileDropDowns;
