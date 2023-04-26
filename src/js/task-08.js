const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', e => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const formObject = {};

  for (let [key, value] of formData.entries()) {
    formObject[key] = value;
  }

  if (!formObject.email || !formObject.password) {
    alert('Please fill in all fields');
    return;
  }

  console.log(formObject);
  loginForm.reset();
});
