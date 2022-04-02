const scroll = require('scrollama');
const scroller = scroll();

// DOM - document object model
var main = document.querySelector('main');
var scrolly = main.querySelector('#scrolly');
var sticky = scrolly.querySelector('.sticky-thing');
var article = scrolly.querySelector('article');
var steps = article.querySelectorAll('.step');

// initialize the scrollama
// var scroller = scrollama();

// scrollama event handlers
function handleStepEnter(response) {
  // response = { element, direction, index }
  var el = response.element;
  console.log(el);

  // remove is-active from all steps
  // then add is-active to this step
  steps.forEach((step) => step.classList.remove('is-active'));
  el.classList.add('is-active');

  // update graphic based on step
  // use "template literals" with backticks
  sticky.querySelector('p').innerText = `Step number ${el.dataset.step}`;
  sticky.style.backgroundColor = el.dataset.color;
  sticky.querySelector('p').style.fontSize = `${el.dataset.step}rem`;
}

function init() {
  // 2. setup the scroller passing options
  // 		this will also initialize trigger observations
  // 3. bind scrollama event handlers (this can be chained like below)
  scroller
    .setup({
      step: '#scrolly article .step',
      offset: 0.33,
      debug: false,
    })
    .onStepEnter(handleStepEnter);

  // setup resize event
  window.addEventListener('resize', scroller.resize);
}

// kick things off
init();

//cursor
const cursorRounded = document.querySelector('#custom-cursor');

const moveCursor = (e) => {
  const mouseY = e.clientY;
  const mouseX = e.clientX;

  cursorRounded.style.transform = `translate3d(${mouseX}px, ${
    mouseY - 94
  }px, 0)`;
  console.log(mouseX);
};

window.addEventListener('mousemove', moveCursor);

//end cursor

//hideloading
function hideLoading() {
  document.querySelector('.loading-page').style.display = 'none';
}
window.addEventListener('click', hideLoading);

//end hideloading
