const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello')
})

app.listen(5000, (err) => {
    err ? console.log(err) : console.log('SERVER WAS STARTED')
})