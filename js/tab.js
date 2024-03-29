function handleTabClickEvent(event) {
  let prevTab = document.getElementsByClassName("selected-tab")[0];
  let prevTabIndex = prevTab.id.split("-")[1];
  let currentTab = event.target;
  let currentTabIndex = currentTab.id.split("-")[1];

  if (prevTab !== currentTab && prevTab !== event.target.parentElement) {
    changeTabPanelContents(prevTabIndex, currentTabIndex);
    changeSelectedTab(prevTab, currentTab);
    changeUnderlinePosition(currentTabIndex);
  }
}

function changeTabPanelContents(prevTabIndex, currentTabIndex) {
  let prevTabPanel = document.getElementById(`tabpanel-${prevTabIndex}`);
  let currentTabPanel = document.getElementById(`tabpanel-${currentTabIndex}`);
  prevTabPanel.hidden = true;
  currentTabPanel.hidden = false;
}

function changeSelectedTab(prevTab, currentTab) {
  prevTab.classList.toggle("selected-tab");
  currentTab.classList.toggle("selected-tab");
}

function changeUnderlinePosition(currentTabIndex) {
  let selectedUnderline =
    document.getElementsByClassName("selected-underline")[0];
  let underlineStyle = [
    { left: "0px", width: "104px" },
    { left: "101px", width: "104px" },
    { left: "205px", width: "120px" },
  ];

  selectedUnderline.style.left = underlineStyle[currentTabIndex - 1].left;
  selectedUnderline.style.width = underlineStyle[currentTabIndex - 1].width;
}
