const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

input.addEventListener('input', event => {
  const name = event.currentTarget.value.trim();
  if (name === '') {
    output.textContent = 'Anonymous';
  } else {
    output.textContent = name;
  }
});
