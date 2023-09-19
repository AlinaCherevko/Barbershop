const burgerBtnEl = document.querySelector(".open-mob-menu");
const closeBtn = document.querySelector(".close-mob-menu");
const mobMenu = document.querySelector(".mob-menu");

burgerBtnEl.addEventListener("click", onBurgerClick);
closeBtn.addEventListener("click", onCloseClick);

function onCloseClick() {
  mobMenu.classList.add("is-hidden");
}
function onBurgerClick() {
  mobMenu.classList.remove("is-hidden");
}
