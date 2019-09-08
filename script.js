function getValues() {
  let originContent = document.getElementById("originContent");
  let previewContent = document.getElementById("previewContent");
  let firstNamePre = document.getElementById("firstNamePre");
  let lastNamePrev = document.getElementById("lastNamePrev");
  let dobPre = document.getElementById("dobPre");

  originContent.style.display = "none";
  previewContent.style.display = "block";
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let dob = document.getElementById("dob").value;

  firstNamePre.innerHTML = firstName;
  lastNamePrev.innerHTML = lastName;
  dobPre.innerHTML = dob;
}
