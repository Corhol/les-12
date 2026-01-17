const openButton = document.querySelector(".openbut");
const closeButton = document.querySelector(".closebut");
const backgrod = document.querySelector(".backgrod");
const modal = document.querySelector(".modal");
openButton.addEventListener("click", function () {
  backgrod.classList.remove("hidden");
  setTimeout(function () {
    backgrod.classList.add("visible");
    modal.classList.add("modalVisual");
  }, 10);
});
closeButton.addEventListener("click", function () {
  backgrod.classList.remove("visible");
  modal.classList.remove("modalVisual");
  setTimeout(function () {
    backgrod.classList.add("hidden");
  }, 300);
});
