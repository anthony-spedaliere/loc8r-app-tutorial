const mongoose = require('mongoose');
const Loc = mongoose.model('Location');

// locations
const locationsListByDistance = (req, res) => {
    res
        .status(200)
        .json({"status": "success"});
 };
const locationsCreate = (req, res) => { 
    res
        .status(200)
        .json({"status": "success"});
};

const locationsReadOne = (req, res) => { 
    res
        .status(200)
        .json({"status": "success"});
};
const locationsUpdateOne = (req, res) => { 
    res
        .status(200)
        .json({"status": "success"});
};
const locationsDeleteOne = (req, res) => { 
    res
        .status(200)
        .json({"status": "success"});
 };

module.exports = {
    locationsListByDistance,
    locationsCreate,
    locationsReadOne,
    locationsUpdateOne,
    locationsDeleteOne
};


