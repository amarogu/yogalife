const collapsibles = document.getElementById("menu");
const hamburger = document.querySelectorAll(".hamburger");
hamburger.forEach((item) =>
  item.addEventListener("click", function () {
    collapsibles.classList.toggle("collapsibles--open");
    hamburger.forEach((item) => 
        item.classList.toggle("hamburger--open")
    )
  })
);