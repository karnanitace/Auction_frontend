const MobileNav = document.getElementById("mkd-mobile-nav");
const SearchBar = document.getElementById("mkd-header-2");
const timer = document.querySelector(".cat-auction-timer");

function ToggleNav(e) {
  const id = e.target.id;
  if (id === "mkd-mobile-nav" || id === "toggler") {
    MobileNav.classList.toggle("active");
  }
}
MobileNav.onclick = ToggleNav;

function ToggleSearch(e) {
  SearchBar.classList.toggle("d-none");
}

// countdown timer

// Set the date we're counting down to
var countDownDate = new Date("Oct 10, 2021 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element
  timer.innerHTML = `${days}D, ${hours}H : ${minutes}M : ${seconds}S`;

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
