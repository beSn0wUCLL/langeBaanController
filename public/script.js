console.log('Script.js loaded');

const buttonToggleBackward = document.getElementById('buttonToggleBackward');
const buttonToggleForward = document.getElementById('buttonToggleForward');
const buttonStop = document.getElementById("buttonStop");

const buttonHoldBackward = document.getElementById("buttonHoldBackward");
const buttonHoldForward = document.getElementById("buttonHoldForward");

buttonToggleBackward.addEventListener('click', () => {
    fetch('/backward', {method: 'POST'});
});

buttonToggleForward.addEventListener('click', () => {
    fetch('/forward', {method: 'POST'});
});

buttonStop.addEventListener('click', () => {
    fetch('/stop', {method: 'POST'});
});

//HOLD TO RUN BACKWARDS
buttonHoldBackward.addEventListener("mousedown", () => {
    fetch('/backward', {method: 'POST'});
});

buttonHoldBackward.addEventListener("mouseup", () => {
    fetch('/stop', {method: 'POST'});
});

buttonHoldBackward.addEventListener("touchstart", () => {
    fetch('/backward', {method: 'POST'});
});

buttonHoldBackward.addEventListener("touchend", () => {
    fetch('/stop', {method: 'POST'});
});

//Prevents context menu from popping up
buttonHoldBackward.addEventListener("contextmenu", event => {
    event.preventDefault();
});

buttonHoldBackward.addEventListener("selectstart", event => {
    event.preventDefault();
});
//HOLD TO RUN BACKWARDS END


//HOLD TO RUN FORWARDS
buttonHoldForward.addEventListener("mousedown", () => {
    fetch('/forward', {method: 'POST'});
});

buttonHoldForward.addEventListener("mouseup", () => {
    fetch('/stop', {method: 'POST'});
});

buttonHoldForward.addEventListener("touchstart", () => {
    fetch('/forward', {method: 'POST'});
});

buttonHoldForward.addEventListener("touchend", () => {
    fetch('/stop', {method: 'POST'});
});

buttonHoldForward.addEventListener("contextmenu", event => {
    event.preventDefault();
});

buttonHoldForward.addEventListener("selectstart", event => {
    event.preventDefault();
});
//HOLD TO RUN FORWARDS END