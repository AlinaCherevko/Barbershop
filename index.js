const burgerBtnEl = document.querySelector(".open-mob-menu");
const closeBtn = document.querySelector(".close-mob-menu");
const mobMenu = document.querySelector(".mob-menu");
const aboutEl = document.getElementById("about-mob");
const servicesEl = document.getElementById("servises-mob");
const barbersEl = document.getElementById("barbers-mob");
const contactsEl = document.getElementById("contacts-mob");
const bookingEl = document.getElementById("booking-mob");

burgerBtnEl.addEventListener("click", onBurgerClick);
closeBtn.addEventListener("click", onCloseClick);

function onCloseClick() {
  mobMenu.classList.add("is-hidden");
}
function onBurgerClick() {
  mobMenu.classList.remove("is-hidden");
}

mobMenu.addEventListener("click", onLinkClick);

function onLinkClick() {
  if ((target = aboutEl || servicesEl || barbersEl || contactsEl || bookingEl))
    onCloseClick();
}
