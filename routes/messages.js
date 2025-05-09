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
    const message = new Message({
        name: req.body.name,
        relationship: req.body.relationship,
        message: req.body.message
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