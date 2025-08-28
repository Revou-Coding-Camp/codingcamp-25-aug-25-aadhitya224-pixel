let visitorName = prompt("Please enter your name:", "Guest");
document.getElementById("display-name").innerText = visitorName;

function validateForm() {
  const name = document.forms["message-form"]["fullName"].value;
  const email = document.forms["message-form"]["email"].value;
  const phone = document.forms["message-form"]["phone"].value;
  const message = document.forms["message-form"]["message"].value;

  if (name == "" || email == "" || phone == "" || message == "") {
    alert("All fields are required and cannot be empty!");
    return false;
  }

  document.getElementById("result-name").innerText = name;
  document.getElementById("result-email").innerText = email;
  document.getElementById("result-phone").innerText = phone;
  document.getElementById("result-message").innerText = message;

  return false;
}
