document.querySelector("#menuButton").addEventListener("click", (ev) => {
  document.querySelector(".header__menu").classList.add("header__menu_opened");
});

document.querySelector("#menuCloseButton").addEventListener("click", (ev) => {
  document
    .querySelector(".header__menu")
    .classList.remove("header__menu_opened");
});

document.querySelector("#sliderRightButton").addEventListener("click", (ev) => {
  const sliderNode = ev.target
    .closest(".slider")
    .querySelector(".slider__items");
  sliderNode.scrollLeft =
    Math.ceil(
      (sliderNode.scrollLeft + (sliderNode.offsetWidth - 326) / 2) / 326 + 0.1
    ) *
      326 -
    (sliderNode.offsetWidth - 326) / 2;
});

document.querySelector("#sliderLeftButton").addEventListener("click", (ev) => {
  const sliderNode = ev.target
    .closest(".slider")
    .querySelector(".slider__items");
  sliderNode.scrollLeft =
    Math.floor(
      (sliderNode.scrollLeft + (sliderNode.offsetWidth - 326) / 2) / 326 - 0.1
    ) *
      326 -
    (sliderNode.offsetWidth - 326) / 2;
});
