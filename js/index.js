// @ NavBar & Toggling JavaScript
const toggle = document.getElementById('toggle')
const navbar = document.getElementById('navbar')

toggle.onclick = function(){
  toggle.classList.toggle('active')
  navbar.classList.toggle('button')
}

// ^ Page Transitions - Powered By Swup
import Swup from 'swup';
const swup = new Swup(); // only this line when included with script tag



$(document).ready(function(){
  $('ul li a').click(function(){
    $('li a').removeClass("active");
    $(this).addClass("active");
});
});


// Getting links - all links ||
const currentLocation = location.href;
const menuItem = document.querySelectorAll('#navbar a');
const menuLength = menuItem.length
for (let i = 0; i<menuLength; i++){
    if(menuItem[i].href === currentLocation){
      menuItem[i].className = "active"
    }
}


/*
$(document).on('click', '#navbar a', function(){
    $(this).addClass('active').siblings().removeClass('active')
})*/

/*
const toggle = document.getElementById('toggle');
const navbar = document.getElementById('navbar');
const a = document.querySelector('a');


toggle.onclick = function(){
    toggle.classList.toggle('active');
    navbar.classList.toggle('active');
}


window.onscroll = function() {myFunction()};

// Get the navbar
var navfull = document.getElementById("navfull");

// Get the offset position of the navbar
var sticky = navfull.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navfull.classList.add("sticky")
  } else {
    navfull.classList.remove("sticky");
  }
}*/