// mobile menu
const mobileMenu = document.getElementById('mobileMenu');
const openHamburger = document.getElementById('hamburger');
const closeHamburger = document.getElementById('closeBtn');
const link = document.querySelectorAll('.link');
function openModal () {
    mobileMenu.style.display = 'block';
}
function closeModal () {
    mobileMenu.style.display = 'none';
}
openHamburger.addEventListener('click', openModal)
closeHamburger.addEventListener('click', closeModal)
link.forEach((link) => {
    link.addEventListener('click', closeModal);
}) 

//   form validation
const form = document.getElementById('form');
const error = document.getElementById('error');
const email = document.getElementById('email');
function formValidate() {
  if (email.value !== email.value.toLowerCase()) {
    error.innerHTML = `Your email is not in lowercase. Consider using ${email.value.toLowerCase()} instead`;
    return false;
  }
  return true;
}

form.addEventListener('submit', (submitForm) => {
  if (!formValidate()) {
    submitForm.preventDefault();
  }
});

// const person = {
//   age: 35,
//   name: 'John',
// }
// const {age,name} = person;
// console.log(age)
const fullName = document.getElementById('name');
const message = document.getElementById('message');
form.addEventListener('submit', function(e) {
  const formData = {
    fullName: fullName.value,
    email: email.value,
    message: message.value,  
  }
  localStorage.setItem('myFormData', JSON.stringify(formData))
  // console.log(formData.firstName, formData.email, formData.message, e)
})
function getData() {
  const {fullName} = JSON.parse(localStorage.getItem('myFormData'));
  const {email} = JSON.parse(localStorage.getItem('myFormData'));
  const {message} = JSON.parse(localStorage.getItem('myFormData'));
  document.getElementById('name').value = fullName;
  document.getElementById('email').value = email;
  document.getElementById('message').value = message;
}
window.addEventListener('load', getData);
