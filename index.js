const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const COLORS_DELAY = 1000;
let timeOutId = null;

const refs = {
  start: document.querySelector('button[data-action="start"]'),
  stop: document.querySelector('button[data-action="stop"]')
}
console.log(refs.start)
console.log(refs.stop)

refs.start.addEventListener('click', () => {
  console.log('start')
  
  startBgColor()
  refs.start.setAttribute('disabled', true);
});

refs.stop.addEventListener('click', () => {
  console.log('stop')
  clearInterval(timeOutId);
  refs.start.removeAttribute('disabled');
});

function setBodyBgColor() {

const randomColor = colors[Math.floor(Math.random() * colors.length)]
     document.body.style.backgroundColor = randomColor;
}

function startBgColor() {
  timeOutId = setInterval(setBodyBgColor, COLORS_DELAY);
}

// const randomIntegerFromInterval = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }
