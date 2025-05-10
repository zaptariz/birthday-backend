const express = require('express');
const router = express.Router();
const Message = require('../models/Message'); // Only keep Message if used below

// Get all messages
router.get('/', async (req, res) => {
    try {
        const messages = await Message.find().sort({ createdAt: -1 });
        res.json(messages);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Add a new message
router.post('/', async (req, res) => {
    // Get IP address (supports proxies)
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    // Check for existing message from this IP
    const existing = await Message.findOne({ ip });
    if (existing) {
        return res.status(409).json({ message: 'You have already submitted a wish.' });
    }

    const message = new Message({
        name: req.body.name,
        relationship: req.body.relationship,
        message: req.body.message,
        ip: ip
    });

    try {
        const newMessage = await message.save();
        res.status(201).json(newMessage);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete a message by ID
router.delete('/:id', async (req, res) => {
    try {
        const deleted = await Message.findByIdAndDelete(req.params.id);
        if (!deleted) {
            return res.status(404).json({ message: 'Message not found' });
        }
        res.json({ message: 'Message deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router; 