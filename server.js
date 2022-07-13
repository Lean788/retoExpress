const express = require('express');
const app = express();
require('dotenv').config();
let db = require('./db.js');

//configure
app.set('json spaces', 2);
const PORT = process.env.PORT || 3000;

const carsRouter = require('./Routes/carsRouter.js');

// Middleware
app.use(express.json());

// Routes
app.use('/cars', carsRouter);
app.get('/', (req, res) => {
    res.send('Hello world!')
});

app.get('*', (req, res)=> {
    
    return res.status(404).send('Route not found')
}); 

app.listen(PORT, () => {
    console.log(`The server is listening on port ${PORT}`)
});