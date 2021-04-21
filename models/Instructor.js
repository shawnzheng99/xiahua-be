const mongoose = require('mongoose');
const User = require('./User');


const instructor_types = ['CASI', 'IASC'];


const instructorSchema = new User({
    user_id: { type: String, required: true },
    type: { type: String, required: true, default: 'snow'},
    level_type: { enum: instructor_types, requireed: true, default: 'CASI' },
    level: { type: Number, max: 3, min: 1},
    certificate: { type: String, required: true }, 
})


module.exports = mongoose.model('Instructor', instructorSchema);
