function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');
const input = document.querySelector('#controls input');
const boxesContainer = document.querySelector('#boxes');

const createBoxes = (amount) => {
  const elements = [];
  let size = 30;

  for (let i = 0; i < amount; i++) {
    const div = document.createElement('div');
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = getRandomHexColor();
    elements.push(div);
    size += 10;
  }
  boxesContainer.innerHTML = '';
  boxesContainer.append(...elements);
};

const on = () => {
  const amount = parseInt(input.value, 10);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = '';
  }
};

btnCreate.addEventListener('click', on);

const destroyBoxes = () => {
  boxesContainer.innerHTML = '';
};
btnDestroy.addEventListener('click', destroyBoxes);
