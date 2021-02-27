const mongoose = require('mongoose');
module.exports = function() {
    const db = mongoose.connect('mongodb://localhost/amirshayan');
    require('../models/schemas/user.schema');
    require('../models/schemas/contact.schema');
    return db;
};
