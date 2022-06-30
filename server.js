const express = require('express');
const app = express();
require('dotenv').config();
let db = require('./db.js');

//configure
app.set('json spaces', 2);
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

app.get('/cars', (req, res) => {
    res.send(db);
});

app.get('/cars/:id', (req, res) => {
    const  { id } = req.params;
    let car = db.find((car) => car.id == id);
    res.json(car);
});

app.post('/cars', (req, res) => {
    const  {id, name, email, carBrand, carModel, carYear} = req.body;
    const car = {id, name, email, carBrand, carModel, carYear};
    db.push(car);
    res.json(car);
});

app.put('/cars/:id', (req, res) => {
    const  { id } = req.params;
    const { name, email, carBrand, carModel, carYear } = req.body;
    let carsList = db.filter(car => car.id != id);
    let car = {id, name, email, carBrand, carModel, carYear};
    carsList.push(car);
    db = carsList;
    res.json(car);
});

app.delete('/cars/:id', (req, res) => {
    const  { id } = req.params;
    let carsList = db.filter((car) => car.id != id);
    db = carsList;
    res.json('OK');
});

app.get('/', (req, res) => {
    res.send('Hello world!')
});



app.listen(PORT, () => {
    console.log(`The server is listening on port ${PORT}`)
});