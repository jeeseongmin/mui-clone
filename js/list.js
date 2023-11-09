/**
 * Nested List
 * 1. arrow icon 변경 - text를 expand_more | expand_less
 * 2. nextLi 내 toggle-hidden class toggle 처리
 */
let toggleLi = document.getElementById("toggle-li");
toggleLi.addEventListener("click", function (event) {
  let li, nextLi, icon;
  if (event.target.tagName === "LI") li = event.target;
  else li = event.target.parentNode;
  nextLi = li.nextElementSibling;

  // arrow icon 변경
  icon = li.lastElementChild;
  if (icon.innerText === "expand_more") icon.innerText = "expand_less";
  else icon.innerText = "expand_more";
  // nested-li toggle 처리
  nextLi.classList.toggle("toggle-hidden");
});

/**
 * Interactive components
 * 1. id = interactive-list 하위 list-cmponent들에 dense toggle
 * 2. secondary
 */

// Enable Dense
let denseCheckbox = document.getElementById("enable-dense");
denseCheckbox.addEventListener("click", function (event) {
  let listComponents = document.querySelectorAll("#interactive-component");
  listComponents.forEach((item) => {
    item.classList.toggle("dense");
  });
});

// Enable secondary text
let secondaryCheckbox = document.getElementById("enable-secondary-text");
secondaryCheckbox.addEventListener("click", function (event) {
  console.log(event.target.checked);
  let secondaryTextComponents = document.querySelectorAll("#secondary-text");
  secondaryTextComponents.forEach((item) => {
    item.classList.toggle("hidden");
  });
});
