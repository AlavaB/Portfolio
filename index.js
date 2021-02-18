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


$(".nav-item").on("click", function (e) {
  // Remove class active form all li.nav-tiem
  $("li.nav-item").removeClass("active");
  // Add Class to current Element.
  $(this).addClass("active");
});