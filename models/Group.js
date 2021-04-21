const mongoose = require('mongoose')

const groupSchema = new mongoose.Schema({
    name: { type: String, required: true },
    instructor_id: { type: String, required: true },
    start_time: {type: Date, required: true },
    duration: { type: Number, required: true },
    students_id: [String],
    location: { type: String, required: true }, // enum cypress, whistler, seymor, grouse
    joinable: { type: Boolean, default: false },
    max_ppl: { type: Number, required: true },
    description: { type: String },
    level: {type: Number, min: 0, max: 3}, // 0,1,2,3
    createdAt: {type: Date, default: Date.now()}
});

module.exports = mongoose.model('Group', groupSchema);
