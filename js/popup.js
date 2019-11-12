var link = document.querySelector(".login-link");
var popup = document.querySelector(".modal-login");
var close = popup.querySelector(".modal-close");
var mapLink = document.querySelector(".contacts-button-map");
var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".modal-close");
var login = popup.querySelector("[name=login]");
var password = popup.querySelector("[name=password]");
var form = popup.querySelector("form");
var storage;
var isStorageSupport = true;


link.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  try {
    storage = localStorage.getItem("login");
  } catch(err) {
    isStorageSupport = false;
  }
  if (storage) {
    login.value = storage;
    password.focus();
  } else { login.focus;}
});

mapLink.addEventListener("click", function(evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
});

close.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});

mapClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function(evt) {
  if(evt.keyCode===27) {
    evt.preventDefault();

    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
    if (mapPopup.classList.contains("modal-show")) {
      mapPopup.classList.remove("modal-show");
    }
  }
});

form.addEventListener("submit", function(evt) {
  evt.preventDefault();
  if(!login.value || !password.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth=popup.offsetWidth;//Why?
    popup.classList.add("modal-error");
  } else { if (isStorageSupport) {
    localStorage.setItem("login", login.value);
  }
  }
});
