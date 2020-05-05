const express = require('express');
const config = require('config');
const mongoose = require('mongoose');


const app = express();
app.get('/', (req, res) => {
    res.send('Hello')
})

app.use(express.json({extended:true}));

app.use('/api/auth', require('./routes/auth.route'))
app.use('/api/client', require('./routes/patient.route'))


const PORT = config.get('port') || 5000

async function start () {
    try {
        await mongoose.connect(config.get('mongoUri'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
        app.listen(PORT, () => {
            console.log(`SERVER HAS BEEN STARTED ON PORT ${PORT} `)
        })
    } catch (e) {
        console.log('Server errror:', e.message)
        process.exit(1)
    }
}

start();
