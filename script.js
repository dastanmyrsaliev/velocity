"use strict";

// ! TABS
const tabsBtns = document.querySelectorAll(".tabs__nav button");
const tabsItems = document.querySelectorAll(".tabs__item");

hideTabs();
showTab(0);

/**
 * Функция скрывает табы и убирает active у кнопок
 */
function hideTabs() {
  tabsItems.forEach((item) => item.classList.add("hide"));
  tabsBtns.forEach((item) => item.classList.remove("active"));
}

/**
 * Функция показывает переданный по индексу таб и добавляет active кнопке
 * @param {number} index - Индекс
 */
function showTab(index) {
  tabsItems[index].classList.remove("hide");
  tabsBtns[index].classList.add("active");
}

tabsBtns.forEach((btn, index) =>
  btn.addEventListener("click", () => {
    hideTabs();
    showTab(index);
  }),
);
