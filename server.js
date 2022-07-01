const express = require('express');
const app = express();
require('dotenv').config();
let db = require('./db.js');

//configure
app.set('json spaces', 2);
const PORT = process.env.PORT || 3000;

const carsModel = require('./models/carModel.js');
const carsRouter = require('./views/carsRouter.js');

// Middleware
app.use(express.json());

// Routes
app.use('/cars', carsRouter);
app.get('/', (req, res) => {
    res.send('Hello world!')
});

app.listen(PORT, () => {
    console.log(`The server is listening on port ${PORT}`)
});