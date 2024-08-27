const form = document.getElementById("form"); // Ensure this matches the form ID in HTML
const email = document.getElementById("inputEmail4");

form.addEventListener("submit", (e) => {
  let message = email.value;
  if (message === "" || message == null) {
      document.getElementById("none").style.display ="block";
      document.getElementById("erro").style.display ="block";
      e.preventDefault();
  } 
  else{
    alert("Thank you for subscribing!");
  }
});
