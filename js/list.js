/**
 * 1. arrow icon 변경 - text를 expand_more | expand_less
 * 2. nextLi 내 toggle-hidden class toggle 처리
 */
let haha = document.getElementById("toggle-li");
haha.addEventListener("click", function (event) {
  let li, nextLi, icon;
  if (event.target.tagName === "LI") li = event.target;
  else li = event.target.parentNode;
  nextLi = li.nextElementSibling;

  // arrow icon 변경
  icon = li.lastElementChild;
  console.log(icon, icon.innerText);
  if (icon.innerText === "expand_more") icon.innerText = "expand_less";
  else icon.innerText = "expand_more";
  // nested-li toggle 처리
  nextLi.classList.toggle("toggle-hidden");
});
