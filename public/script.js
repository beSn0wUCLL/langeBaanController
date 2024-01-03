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

// //HOLD TO RUN BACKWARDS
// buttonHoldBackward.addEventListener("mousedown", () => {
//     motorBackward();
// });

// buttonHoldBackward.addEventListener("mouseup", () => {
//     motorStop();
// });

// buttonHoldBackward.addEventListener("touchstart", () => {
//     motorBackward();
// });

// buttonHoldBackward.addEventListener("touchend", () => {
//     motorStop();
// });

// //Prevents context menu from popping up
// buttonHoldBackward.addEventListener("contextmenu", event => {
//     event.preventDefault();
// });
// //HOLD TO RUN BACKWARDS END


// //HOLD TO RUN FORWARDS
// buttonHoldForward.addEventListener("mousedown", () => {
//     motorForward();
// });

// buttonHoldForward.addEventListener("mouseup", () => {
//     motorStop();
// });

// buttonHoldForward.addEventListener("touchstart", () => {
//     motorForward();
// });

// buttonHoldForward.addEventListener("touchend", () => {
//     motorStop();
// });

// buttonHoldForward.addEventListener("contextmenu", event => {
//     event.preventDefault();
// });
// //HOLD TO RUN FORWARDS END


// const motorBackward = () => {
//     motorStop();
//     console.log("Motor Backward");
// };

// const motorForward = () => {
//     motorStop();
//     console.log("Motor Forward");
// };

// const motorStop = () => {
//     console.log("Motor Stop");
// };