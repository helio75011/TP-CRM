const express = require('express');
const Contact = require('../models/Contact');

const router = express.Router();

// CRUD routes here

module.exports = router;

router.post('/create', async (req, res) => {
    try {
        const { firstName, lastName, email, phoneNumber } = req.body;
        const contact = await Contact.create({ firstName, lastName, email, phoneNumber });
        res.status(201).send(contact);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});
