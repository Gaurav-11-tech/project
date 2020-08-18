function validate() {
  var inputText = document.getElementById("user").value;
  var checkEmail = document.getElementById("email").value;
  var checkNumber = document.getElementById("mobileNumber").value;
  var checkYear = document.getElementById("year").value;
  var regcap = /^[A-Z ]+$/;
  if (inputText.match(regcap)) {
    return true;
  } else {
    alert("All letters should be Capital only");
  }
}
