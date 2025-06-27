const data = [
  {
    image: {
      thumbnail: "./assets/images/image-waffle-thumbnail.jpg",
      mobile: "./assets/images/image-waffle-mobile.jpg",
      tablet: "./assets/images/image-waffle-tablet.jpg",
      desktop: "./assets/images/image-waffle-desktop.jpg",
    },
    name: "Waffle with Berries",
    category: "Waffle",
    price: 6.5,
  },
  {
    image: {
      thumbnail: "./assets/images/image-creme-brulee-thumbnail.jpg",
      mobile: "./assets/images/image-creme-brulee-mobile.jpg",
      tablet: "./assets/images/image-creme-brulee-tablet.jpg",
      desktop: "./assets/images/image-creme-brulee-desktop.jpg",
    },
    name: "Vanilla Bean Crème Brûlée",
    category: "Crème Brûlée",
    price: 7.0,
  },
  {
    image: {
      thumbnail: "./assets/images/image-macaron-thumbnail.jpg",
      mobile: "./assets/images/image-macaron-mobile.jpg",
      tablet: "./assets/images/image-macaron-tablet.jpg",
      desktop: "./assets/images/image-macaron-desktop.jpg",
    },
    name: "Macaron Mix of Five",
    category: "Macaron",
    price: 8.0,
  },
  {
    image: {
      thumbnail: "./assets/images/image-tiramisu-thumbnail.jpg",
      mobile: "./assets/images/image-tiramisu-mobile.jpg",
      tablet: "./assets/images/image-tiramisu-tablet.jpg",
      desktop: "./assets/images/image-tiramisu-desktop.jpg",
    },
    name: "Classic Tiramisu",
    category: "Tiramisu",
    price: 5.5,
  },
  {
    image: {
      thumbnail: "./assets/images/image-baklava-thumbnail.jpg",
      mobile: "./assets/images/image-baklava-mobile.jpg",
      tablet: "./assets/images/image-baklava-tablet.jpg",
      desktop: "./assets/images/image-baklava-desktop.jpg",
    },
    name: "Pistachio Baklava",
    category: "Baklava",
    price: 4.0,
  },
  {
    image: {
      thumbnail: "./assets/images/image-meringue-thumbnail.jpg",
      mobile: "./assets/images/image-meringue-mobile.jpg",
      tablet: "./assets/images/image-meringue-tablet.jpg",
      desktop: "./assets/images/image-meringue-desktop.jpg",
    },
    name: "Lemon Meringue Pie",
    category: "Pie",
    price: 5.0,
  },
  {
    image: {
      thumbnail: "./assets/images/image-cake-thumbnail.jpg",
      mobile: "./assets/images/image-cake-mobile.jpg",
      tablet: "./assets/images/image-cake-tablet.jpg",
      desktop: "./assets/images/image-cake-desktop.jpg",
    },
    name: "Red Velvet Cake",
    category: "Cake",
    price: 4.5,
  },
  {
    image: {
      thumbnail: "./assets/images/image-brownie-thumbnail.jpg",
      mobile: "./assets/images/image-brownie-mobile.jpg",
      tablet: "./assets/images/image-brownie-tablet.jpg",
      desktop: "./assets/images/image-brownie-desktop.jpg",
    },
    name: "Salted Caramel Brownie",
    category: "Brownie",
    price: 4.5,
  },
  {
    image: {
      thumbnail: "./assets/images/image-panna-cotta-thumbnail.jpg",
      mobile: "./assets/images/image-panna-cotta-mobile.jpg",
      tablet: "./assets/images/image-panna-cotta-tablet.jpg",
      desktop: "./assets/images/image-panna-cotta-desktop.jpg",
    },
    name: "Vanilla Panna Cotta",
    category: "Panna Cotta",
    price: 6.5,
  },
];
const main = document.querySelector("main");



let width = window.innerWidth;
let height = window.innerHeight;
function reportWindowSize() {
  height = window.innerHeight;
  width = window.innerWidth;
  console.log(width, height);
}
window.onresize = reportWindowSize;

data.forEach((item) => {
  const element = document.createElement("div");
  element.innerHTML = `
    <div class="skeleton-item">
          <!-- button and img -->
          <div class="item-img-button-container">
            <div class="img-skeleton">
              <img
                src="${
                  width < 778
                    ? item.image.desktop
                    : width < 1440
                    ? item.image.mobile
                    : item.image.tablet
                }"
                alt="${item.name}"
              />
            </div>
            <div class="btn-skeleton-container">
                <button class="btn-skeleton">
                  <img src="./assets/images/icon-add-to-cart.svg" alt="cart" />
                  <p>Add to Cart</p>
                </button>
            </div>
          </div>
          <span class="small-text">${item.category}</span>
          <h2 class="product-name">${item.name}</h2>
          <span class="price">$${item.price}</span>
    </div>
    `;
  main.append(element);
});

const buttonDiv = document.querySelectorAll(".btn-skeleton-container");
const imgContainer = document.querySelectorAll(".img-skeleton");
console.log(buttonDiv);
buttonDiv.forEach((button, index) => {
  button.onclick = () => {
    console.log(data[index]);
    console.log(imgContainer[index]);
    imgContainer[index].classList.add("img-skeleton-border");
  button.innerHTML = `
  
    <button class="btn-skeleton btn-skeleton-counter">
          <div>
            <img
              src="./assets/images/icon-decrement-quantity.svg"
              alt="cart decrement"
            />
          </div>
          <span>1</span>
          <div>
            <img
              src="./assets/images/icon-increment-quantity.svg"
              alt="cart increment"
            />
          </div>
        </button>
    `;
  };
});

// console.log(`${item.image} ${item.category} ${item.name} ${item.price}`);
