const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/jobs', (req, res) => {
    res.sendFile(__dirname + '/public/jobs.json');
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});