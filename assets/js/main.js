// ====== Game list Swiper ======
let swiper = new Swiper(".myGameList__container", {
  loop: true,
  cssMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// ====== Game Board  ======

const gameBoardBtnContainer = document.querySelector(
  ".gameBoardBtn__container"
);
const gameBoardContainer = document.querySelector(".gameBoard__container");
const gameBoardBtnPlus = document.querySelector(".ph-plus-bold");
const gameBoardBtnArrow = document.querySelector(".ph-arrow-up-bold");

function expandBoard() {
  if (gameBoardBtnArrow.classList[1] === "hidden") {
    gameBoardBtnPlus.classList.add("hidden");
    gameBoardBtnArrow.classList.remove("hidden");
    gameBoardContainer.style.height = "775px";
  } else if (gameBoardBtnPlus.classList[1] === "hidden") {
    gameBoardBtnArrow.classList.add("hidden");
    gameBoardBtnPlus.classList.remove("hidden");
    gameBoardContainer.style.height = "390px";
  }
}

function expandBoardBack() {}

gameBoardBtnContainer.addEventListener("click", expandBoard);
