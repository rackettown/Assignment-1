function validateForm() {
  let password = document.forms["myForm"]["pwd"].value;
  let passwordAgain = document.forms["myForm"]["pwd_agn"].value;
  if (password.length < 8 || password !== passwordAgain) {
    alert("Password does not meet requirements");
    return false;
  }
}