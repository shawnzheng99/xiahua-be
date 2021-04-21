const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    display_name: { type: String, required: true },
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    gender: { type: String, required: true },
    avatar: { type: String, required: false },
    wx_id: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    age: { type: Number, required: true },
    played_age: { type: Number, required: true }, // in years
    created_at: { type: Date, default: Date.now },
    last_login: { type: Date, default: Date.now },
})

module.exports = mongoose.model('User', UserSchema);
