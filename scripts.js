document.addEventListener("DOMContentLoaded", () => {
  const prevButton = document.getElementById("prev");
  const nextButton = document.getElementById("next");
  const items = document.querySelectorAll(".list .item");

  let active = 0;
  const lastPosition = items.length - 1;

  nextButton.onclick = () => {
    items[active].classList.remove("active");
    active = active + 1 > lastPosition ? 0 : active + 1;
    items[active].classList.add("active");
  };

  prevButton.onclick = () => {
    items[active].classList.remove("active");
    active = active - 1 < 0 ? lastPosition : active - 1;
    items[active].classList.add("active");
  };
});

function showMenu() {
  const menu = document.getElementById("menu-list");
  if (menu.style.display === "flex") {
    menu.style.display = "none";
  } else {
    menu.style.display = "flex";
  }
}
