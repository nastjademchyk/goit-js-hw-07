const registerForm = document.querySelector('.login-form');

const handleSubmit = event => {
  event.preventDefault();

  const form = event.target;
  const email = form.elements.email.value.trim();
  const password = form.elements.password.value.trim();
  if (email === '' || password === '') {
    alert('All form fields must be filled in');
    return;
  }
  const formInfo = {
    email: email,
    password: password,
  };
  console.log(formInfo);
  form.reset();
};

registerForm.addEventListener('submit', handleSubmit);
