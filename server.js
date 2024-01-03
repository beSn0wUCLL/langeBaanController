const express = require('express');
const gpio = require('array-gpio');
const app = express();
const PORT = 3000;

let relaisBackward = gpio.out(11);
let relaisForward = gpio.out(12);

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.listen(PORT);
console.log('Started Server at http://localhost:' + PORT);

app.post('/backward', (req, res) => {
    // console.log('Clicked Backward');

    motorBackward();

    res.sendStatus(200);
});

app.post('/forward', (req, res) => {
    // console.log('Clicked Forward')

    motorForward();

    res.sendStatus(200);
});

app.post('/stop', (req, res) => {
    // console.log('Clicked Stop')

    motorStop();

    res.sendStatus(200);
});

const motorBackward = () => {
    motorStop();
    relaisBackward.on();
};

const motorForward = () => {
    motorStop();
    relaisForward.on();
};

const motorStop = () => {
    relaisBackward.off();
    relaisForward.off();
};