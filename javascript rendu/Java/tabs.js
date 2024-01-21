let tab = document.querySelectorAll('.tab');
let content = document.querySelectorAll('.content')

tab.forEach(tab => {
    tab.classList.remove('active')
})
content.forEach(content => {
    content.classList.remove('active')
})


function openCity(evt, cityName) {
    // Declare all variables
    var i, content, tab;
  
    // Get all elements with class="tabcontent" and hide them
    content = document.getElementsByClassName("content");
    for (i = 0; i < content.length; i++) {
      content[i].style.display = "none";
    }
  
    // Get all elements with class="tab" and remove the class "active"
    tab = document.getElementsByClassName("tab");
    for (i = 0; i < tab.length; i++) {
      tab[i].className = tab[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
