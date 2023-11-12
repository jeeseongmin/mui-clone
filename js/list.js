/**
 * Virtualized List
 */
let VirtualizedLi = document.getElementById("virtualized-component");
let data = Array.from({ length: 200 }, (n, i) => i + 1);

data.forEach((n, index) => {
  let element = document.createElement("li");
  let a = document.createElement("a");
  a.classList.add("material-ripple");
  a.dataset.color = "d6d6d6";
  a.innerText = `item ${n}`;

  element.appendChild(a);
  VirtualizedLi.childNodes[1].appendChild(element);
});

{
  /* <a class="material-ripple" data-color="ff99ff"></a> */
}

function clickTabBtn(event) {
  let text = event.target.textContent.trim();
  let tabBtns = document.querySelectorAll(".tab-btn");
  let selectedBorder = document.getElementById("selected-border");
  let left = {
    "Item One": "0px",
    "Item Two": "110px",
    "Item Three": "220px",
  };

  tabBtns.forEach(function (item) {
    item.classList.remove("selectedBtn");
  });
  event.target.classList.add("selectedBtn");
  console.log("selectedBorder ", selectedBorder, text, left[text]);
  selectedBorder.style.left = left[text];

  let tabContents = document.getElementById("tab-contents");
  tabContents.innerText = text;
}

/* Ripple */
Array.from(document.querySelectorAll(".material-ripple")).forEach((a) => {
  a.addEventListener("click", function (e) {
    const ripple = document.createElement("div"),
      rect = a.getBoundingClientRect();
    (ripple.className = "animate"),
      (ripple.style.left = `${e.x - rect.left}px`),
      (ripple.style.top = `${e.y - rect.top}px`),
      (ripple.style.background = `#${
        a.dataset.color !== undefined ? a.dataset.color : "accef7"
      }`),
      ripple.style.setProperty("--material-scale", a.offsetWidth),
      a.append(ripple),
      setTimeout(function () {
        ripple.parentNode.removeChild(ripple);
      }, 500);
  });
});
