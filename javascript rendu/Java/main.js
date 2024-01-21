


let accordions = document.querySelectorAll(".accordeon")
accordions.forEach(function(item) {
    item.addEventListener('click', function() {
        this.classList.toggle('open')
    })
})


//slide JAVA--------------------------------------------
var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

//darkmode JS------------------------------------------------------------------------------------------------
function DarkModeButton() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }
