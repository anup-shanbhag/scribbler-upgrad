var signInModal = document.getElementById("sign-in-info");
var btnSignIn = document.getElementById("btn-sign-in");
var signInClose = document.getElementById("sign-in-close");

var signUpModal = document.getElementById("sign-up-info");
var btnSignUp = document.getElementById("btn-sign-up");
var signUpClose = document.getElementById("sign-up-close");

// When the user clicks the button, open the modal 
btnSignIn.onclick = function() {
  signInModal.style.display = "block";
}
btnSignUp.onclick = function() {
  signUpModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
signInClose.onclick = function() {
  signInModal.style.display = "none";
}
signUpClose.onclick = function() {
  signUpModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == signInModal) {
    signInModal.style.display = "none";
  }
}
window.onclick = function(event) {
  if (event.target == signUpModal) {
    signUpModal.style.display = "none";
  }
}

