let photo = document.getElementById("photo");
let aadhar = document.getElementById("aadhar");
let certificate = document.getElementById("certificate");
let photo_x = document.getElementById("photo-x");
let aadhar_x = document.getElementById("aadhar-x");
let certificate_x = document.getElementById("certificate-x");

photo.addEventListener("change", function () {
  let name = this.files[0].name;
  photo_x.innerHTML = name;
});

aadhar.addEventListener("change", function () {
  let name = this.files[0].name;
  aadhar_x.innerHTML = name;
});

certificate.addEventListener("change", function () {
  let name = this.files[0].name;
  certificate_x.innerHTML = name;
});
