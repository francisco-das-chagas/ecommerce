const wrapper = document.querySelector(".sliderWrapper")
const menuItems = document.querySelectorAll(".menuItem")

const products = [
  {
    id: 1,
    title: "Air Force",
    price: 119,
    colors: [
      {
        code: "black",
        img: "./img/air.png"
      },
      {
        code: "darkblue",
        img: "./img/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 149,
    colors: [
      {
        code: "lightgray",
        img: "./img/jordan.png"
      },
      {
        code: "green",
        img: "./img/jordan2.png"  
      },
    ],
  },
  {
    id: 3,
    title: "Air Forcem",
    price: 119,
    colors: [
      {
        code: "black",
        img: "./img/air.png"
      },
      {
        code: "darkblue",
        img: "./img/air2.png"  
      },
    ],
  }
]




menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    wrapper.style.transform = `translateX(${-100 * index}vw)`;
  });
});