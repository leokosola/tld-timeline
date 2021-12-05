const scrolly = document.querySelector("#scrolly");
const sticky = scrolly.querySelector("figure");
const article = scrolly.querySelector("article");
const steps = article.querySelectorAll(".step");
const ballC = document.querySelector("#ball-country");
const ballO = document.querySelector("#ball-other");
const count = document.querySelector('#total-count');
const countC = document.querySelector('#countries-count');
const countO = document.querySelector('#others-count');

const scroller = scrollama();

function handleStepEnter(response) {
  // response = { element, direction, index }
  const el = response.element;
  steps.forEach((step) => step.style.opacity = .2);
  el.style.opacity = 1;

  document.querySelector("#ots").innerText = "";

  // steps.forEach((step) => step.classList.remove("is-active"));
  // el.classList.add("is-active");

	const p = sticky.querySelector("p");
  // p.innerText = el.dataset.size;
  count.innerText = el.dataset.total;
  countC.innerText = el.dataset.countries;
  countO.innerText = el.dataset.others;
	// p.style.fontSize = `${el.dataset.step}rem`;
	// sticky.style.backgroundColor = el.dataset.color;
	ballC.style.width = `${el.dataset.countries}px`;
	ballC.style.height = `${el.dataset.countries}px`;
  ballO.style.width = `${el.dataset.others}px`;
	ballO.style.height = `${el.dataset.others}px`;

  if(el.id === 'alert') {
    console.log('This year ICANN decided to open up domain system for new application.');
    // window.alert('This year ICANN decided to open up domain system for new application.')
  }
}

function handleStepExit(response) {
  if(response.direction === 'up') {
    response.element.style.opacity = 0.2;
  }
};

function init() {
  scroller
    .setup({
      step: "#scrolly article .step",
      offset: 0.55,
      debug: false,
    })
    .onStepEnter(handleStepEnter)
    .onStepExit(handleStepExit);

	window.addEventListener("resize", scroller.resize);
}

init();

d3.select('#scrolly').insert("article")
