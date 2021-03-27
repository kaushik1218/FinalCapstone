const mongoose = require('mongoose')

const homeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter Celebrity name'],
        trim: true,
        maxLength: [100, 'Celebrity name cannot exceed 100 characters']
    },
    images: [
        {
            public_id: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            },
        }
    ],
    AddedOn: {
        type: Date,
        default: Date.now
    },
    celebid: {
        type: Number,
        default: 0
    }
})

module.exports = mongoose.model('Home', homeSchema);