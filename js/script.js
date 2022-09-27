function validateForm() {
    let x = document.forms["contact"]["message"].value;
    if (x == "") {
      alert("Message needs to be filled out");
      return false;
    }
  }