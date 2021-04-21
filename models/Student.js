const mongoose = require('mongoose');
const User = require('./User');

const studentSchema = new User({
    user_id: { type: String, required: true },
    type: { type: String, required: true, default: 'snow'},
});


module.exports = mongoose.model('Student', studentSchema);
