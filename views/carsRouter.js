const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send(carsModel.findAll());
});

router.get('/:id', (req, res) => {
    const  { id } = req.params;
    res.json( carsModel.findById(id) );
});

router.post('/', (req, res) => {
    const  { body } = req;
    return res.json(carsModel.create(body));
});

router.put('/:id', (req, res) => {
    const  { id } = req.params;
    const { body } = req;
    res.json(carsModel.update({id, ...body}))
});

router.delete('/:id', (req, res) => {
    const  { id } = req.params;
    res.json(carsModel.delete(id));
});

module.exports = router;