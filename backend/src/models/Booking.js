const mongoose = require('mongoose');


const BookingSchema = new mongoose.Schema({
    date: String,
    approved: Boolean,
    user: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User'
    },
    spot: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Spot'
    }
});


module.exports = mongoose.model('Booking', BookingSchema);