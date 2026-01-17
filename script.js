const openButton = document.querySelector(".openbut");
const closeButton = document.querySelector(".closebut");
const backgrod = document.querySelector(".backgrod");
openButton.addEventListener("click", function () {
  backgrod.classList.remove("hidden");
});
closeButton.addEventListener("click", function () {
  backgrod.classList.add("hidden");
});
