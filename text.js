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
