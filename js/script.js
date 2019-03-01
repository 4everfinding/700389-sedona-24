var formLink = document.querySelector(".search__button--open");
var formSearch = document.querySelector(".search__form");
var dateArrival = formSearch.querySelector("[name=date-arrival]");
var dateExit = formSearch.querySelector("[name=date-exit]");
var amountAdults = formSearch.querySelector("[name=amount-adults]");
var amountChildren = formSearch.querySelector("[name=amount-children]");

var isStorageSupport = true;
var storageAdults = "";
var storageChildren = "";

try {
  var storageAdults = localStorage.getItem("adults");
  var storageChildren = localStorage.getItem("children");
} catch (err) {
  isStorageSupport = false;
}

formLink.addEventListener("click", function(evt) {
    evt.preventDefault();
    formSearch.classList.toggle("search__form--show");
    formSearch.classList.remove("search__form--error");
    if (storageAdults) {
      amountAdults.value = storageAdults;
    }
    if (storageChildren) {
      amountChildren.value = storageChildren;
    }
});

formSearch.addEventListener("transitionend", function() {
    dateArrival.focus();
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (formSearch.classList.contains("search__form--show")) {
      evt.preventDefault();
      formSearch.classList.remove("search__form--show");
      formSearch.classList.add("search__form--error");
    }
  }
});

formSearch.addEventListener("submit", function(evt) {
  if (!dateArrival.value || !dateExit.value || !amountAdults.value || !amountChildren.value) {
    evt.preventDefault();
    formSearch.classList.remove("search__form--error");
    formSearch.offsetWidth = formSearch.offsetWidth;
    formSearch.classList.add("search__form--error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("adults", amountAdults.value);
      localStorage.setItem("children", amountChildren.value);
    }
  }
})
