const express = require('express');
require('dotenv').config();

const PORT = process.env.PORT || 3000;
const app = express();


app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello world!')
});



app.listen(PORT, () => {
    console.log(`The server is listening on port ${PORT}`)
});