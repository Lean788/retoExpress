const carsModel = require('../models/carModel.js');
const carsController = {};

carsController.getAll = (req, res) => {
    let cars = carsModel.findAll()
    if(!cars) {
        return res.status(404).json({
            success: false,
            message: 'cars not found',
        });
        
    }
    
    return res.json({
        success: true,
        message: 'cars retrieved successfully',
        data: cars
    });
};

carsController.getById = (req, res) => {
    const  { id } = req.params;
    let car = carsModel.findById(id);
    if(!car) {
        return res.status(404).json({
            success: false,
            message: 'car not found',
        });
        
    }
    
    return res.status(200).json({
        success: true,
        message: 'car retrieved successfully',
        data: car
    });

};

carsController.create = (req, res) => {
    const  { body } = req;
    let newCar = carsModel.create(body);
    if(!newCar) {
        return res.status(404).json({
            success: false,
            message: 'newCar has not been created',
        });
        
    }
    
    return res.status(201).json({
        success: true,
        message: 'newCar created successfully',
        data: newCar
    });
};

carsController.update = (req, res) => {
    const  { id } = req.params;
    const { body } = req;
    let updatedCar = carsModel.update({id, ...body});
    if(!updatedCar) {
        return res.status(404).json({
            success: false,
            message: 'updatedCar has not been modified',
        });
        
    }
    
    return res.status(200).json({
        success: true,
        message: 'updatedCar modified successfully',
        data: updatedCar
    });
};

carsController.delete = (req, res) => {
    const  { id } = req.params;
    let deletedCar = carsModel.delete(id);
    if(!deletedCar) {
        return res.status(500).json({
            success: false,
            message: 'Car has not been deleted',
        });
        
    }
    
    return res.status(200).json({
        success: true,
        message: 'Car deleted successfully',
        data: deletedCar
    });
};

module.exports = carsController;