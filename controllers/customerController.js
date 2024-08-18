const express = require('express');
const { Customer } = require('../models');
const { responseJson } = require('../utils/helper');

const router = express.Router();

// Get all customers
router.get('/customer', async (req, res) => {
    try {
        const customers = await Customer.findAll({
            include: 'Wallet'
        });
        responseJson(res, 200, 'Success', customers);
    } catch (err) {
        responseJson(res, 500, err.message, null);
    }
});

// Get a single customer
router.get('/customer/:id', async (req, res) => {
    try {
        const customer = await Customer.findAll({
            where: { id: req.params.id },
            include: 'Wallet'
        });
        if (!customer) throw Error('Customer not found');
        responseJson(res, 200, 'Success', customer);
    } catch (err) {
        responseJson(res, 500, err.message, null);
    }
});

module.exports = router;