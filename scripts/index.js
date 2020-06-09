var signInModal = document.getElementById("sign-in-info");
var btnSignIn = document.getElementById("btn-sign-in");
var signInClose = document.getElementById("sign-in-close");

// When the user clicks the button, open the modal 
btnSignIn.onclick = function() {
  signInModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
signInClose.onclick = function() {
  signInModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    signInModal.style.display = "none";
  }
}