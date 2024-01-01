function validateForm() {
    let x = document.forms["Email"].value;
    if (x == "") {
      alert("Email must be written");
      return false;
    }

    x = document.forms["Email"].value;
    if (x == "") {
      alert("your email is invalid");
      return false;
    }
}


