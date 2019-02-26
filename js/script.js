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
    dateArrival.focus();
    if (storageAdults) {
      amountAdults.value = storageAdults;
    }
    if (storageChildren) {
      amountChildren.value = storageChildren;
    }
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (formSearch.classList.contains("search__form--show")) {
      evt.preventDefault();
      formSearch.classList.remove("search__form--show");
    }
  }
});

formSearch.addEventListener("submit", function(evt) {
  if (!dateArrival.value || !dateExit.value || !amountAdults.value || !amountChildren.value) {
    evt.preventDefault();
    alert("Не все поля заполнены!");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("adults", amountAdults.value);
      localStorage.setItem("children", amountChildren.value);
    }
  }
})
