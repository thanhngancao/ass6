const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const studentSchema = new Schema({
    name: {
        type: String,
        require: true,
    },
    description: {
        type: String,
    },
    age: {
        type: Number,
    }
});

module.exports = mongoose.model('student',studentSchema)