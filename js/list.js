let listConfig = {
  numOfData: 200,
  rowHeight: 46,
  listComponentHeight: 400,
  wrapperNode: function () {
    return document.getElementsByClassName("list-wrapper")[0];
  },
  componentNode: function () {
    return this.wrapperNode().children[0];
  },
};

getInitList();

listConfig.wrapperNode().addEventListener("scroll", (item) => {
  let scrollTop = item.target.scrollTop;

  getList(scrollTop);
});

function getInitList() {
  listConfig.componentNode().style.height = `${
    listConfig.numOfData * listConfig.rowHeight
  }px`;

  renderList(0, 10);
}

function getList(scrollTop) {
  let startIndex = Math.floor(scrollTop / listConfig.rowHeight);
  let endIndex = Math.min(
    listConfig.numOfData - 1,
    Math.floor(
      (scrollTop + listConfig.listComponentHeight) / listConfig.rowHeight
    )
  );

  listConfig.componentNode().innerHTML = "";
  renderList(startIndex, endIndex);
}

function renderList(startIndex, endIndex) {
  for (let i = startIndex; i <= endIndex; i++) {
    let div = document.createElement("div");
    div.className = "list-row";
    div.style.top = `${i * listConfig.rowHeight}px`;

    let span = document.createElement("span");
    span.innerText = `Item ${i + 1}`;

    div.appendChild(span);
    listConfig.componentNode().appendChild(div);
  }
}
