const express = require('express');
const gpio = require('array-gpio');
const app = express();
const PORT = 3000;
const timeoutDelay = 200;

let relaisBackward = gpio.out(11);
let relaisForward = gpio.out(12);
let relaisStop = gpio.out(13);
let relaisReserve = gpio.out(15);

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.listen(PORT);
console.log('Started Server at http://localhost:' + PORT);

app.post('/backward', (req, res) => {
    motorBackward();
    res.sendStatus(200);
});

app.post('/forward', (req, res) => {
    motorForward();
    res.sendStatus(200);
});

app.post('/stop', (req, res) => {
    motorStop();
    res.sendStatus(200);
});

const motorBackward = () => {
    motorStop();

    setTimeout(() => {
        relaisBackward.on();
    }, 100);

    setTimeout(() => {
        relaisBackward.off();
    }, 200);
};

const motorForward = () => {
    motorStop();

    setTimeout(() => {
        relaisForward.on();
    }, 100);

    setTimeout(() => {
        relaisForward.off();
    }, 200);
};

const motorStop = () => {
    relaisStop.on();

    setTimeout(() => {
        relaisStop.off();
    }, 100);
};