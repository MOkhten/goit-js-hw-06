const refs = {
  changeColorBtn: document.querySelector('.change-color'),
  color: document.querySelector('.color'),
  body: document.querySelector('body'),
}; 

refs.changeColorBtn.addEventListener('click', handleClick);

function handleClick () {
  const currentColor = getRandomHexColor();
  refs.color.textContent = currentColor;
  refs.body.style.backgroundColor = currentColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

