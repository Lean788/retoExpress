let db = require('../db.js');


carsModel = {};

carsModel.findAll = () => db;
carsModel.findById = (id) => db.find( (car) => car.id == id );
carsModel.create = (body) => {
    let car = body;
    db.push(car);
    
    return car;
};
carsModel.update = (newCar) => {
    let cars = db.filter(car => car.id != newCar.id);
    cars.push(newCar);
    db = cars;

    return newCar;
};
carsModel.delete = (id) => {
    let cars = db.filter(car => car.id != id);
    db = cars;

    return 'OK';
};

module.exports = carsModel;