
// Search bar toggle
function searchBarOn() {
  let searchIcon = document.getElementById("searchBar_wrapper")
  if (window.getComputedStyle(searchIcon).display === "none") {
    searchIcon.style.display = "block";
  } else {
    searchIcon.style.display = "none";
  }
}


// Register Page password match validation
let password = document.getElementById("password")
let confirm_password = document.getElementById("confirm_password");

function validatePassword(event){
  if(password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Passwords Don't Match");
    confirm_password.reportValidity(); 
    event.preventDefault();
  } else {
    confirm_password.setCustomValidity('');
  }
}


password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;

