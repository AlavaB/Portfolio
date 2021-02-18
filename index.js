let navigation = document.getElementById("navigation");
let sticky = navigation.offsetTop;

function stickyNavigation() {
  if (window.pageYOffset > sticky) {
    navigation.classList.add("sticky");
  } else {
    navigation.classList.remove("sticky");
  }
}

window.onscroll = function () {
  stickyNavigation();
};


const headerTextColor = document.getElementsByClassName("header-text-color");

let changeColor = (element, event, color) => {
  element.addEventListener(event, function () {
    for (let index = 0; index < headerTextColor.length; index++) {
      const textColor = headerTextColor[index];
      textColor.style.color = color;
    }
  });
};

for (let index = 0; index < headerTextColor.length; index++) {
  const element = headerTextColor[index];
  changeColor(element, "mouseover", "#392113");
  changeColor(element, "mouseout", "#fcf3e9");
}

