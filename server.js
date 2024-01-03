const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.listen(PORT);
console.log('Started Server at http://localhost:' + PORT);

app.post('/backward', (req, res) => {
    console.log('Clicked Fackward');
    res.sendStatus(200);
});

app.post('/forward', (req, res) => {
    console.log('Clicked Forward')
    res.sendStatus(200);
});

app.post('/stop', (req, res) => {
    console.log('Clicked Stop')
    res.sendStatus(200);
});