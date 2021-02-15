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

