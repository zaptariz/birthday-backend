const mongoose = require('mongoose'); // Only keep mongoose if used below

const MessageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    relationship: {
        type: String,
        required: true,
        enum: ['Family', 'Friend', 'Sister', 'Brother', 'Best Friend', 'Colleague', 'Other']
    },
    message: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    timeOfDay: {
        type: String,
        default: function() {
            const hour = new Date().getHours();
            if (hour < 12) return 'Morning';
            if (hour < 17) return 'Afternoon';
            return 'Evening';
        }
    }
});

module.exports = mongoose.model('Message', MessageSchema); 