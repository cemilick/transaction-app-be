const express = require('express');
const { Customer } = require('../models');
const { responseJson } = require('../utils/helper');
const { Transaction, Wallet } = require('../models');
const { integrateWithThirdAPI } = require('../services/paymentService');

const router = express.Router();

router.post('/transaction', async (req, res) => {
    try {
        console.log(req.body);
        const { customer_id, amount, type } = req.body;

        let customer = await Customer.findAll({
            where: { id: customer_id },
            include: 'Wallet'
        });

        if (!customer) throw Error('Customer not found');
        else customer = customer[0];

        if (type === 'deposit') {
            let transaction = await Transaction.create({ customer_id, amount, type, status: 0 });
            const result = await integrateWithThirdAPI(customer.name, {
                order_id: transaction.id,
                amount: transaction.amount,
                timestamp: transaction.createdAt,
                type
            });

            await Wallet.update({ balance: parseFloat(customer.Wallet.balance) + parseFloat(amount) }, { where: { id: customer.Wallet.id } });
            await Transaction.update({ status: result.status }, { where: { id: transaction.id } });

            transaction = await Transaction.findAll({ where: { id: transaction.id } });

            responseJson(res, 200, 'Success', transaction);
        }

        if (type === 'withdraw') {
            const wallet = customer.Wallet;
            if (wallet.balance >= amount) {
                let transaction = await Transaction.create({ customer_id, amount, type, status: 0 });

                const result = await integrateWithThirdAPI(customer.name, {
                    order_id: transaction.id,
                    amount: transaction.amount,
                    timestamp: transaction.createdAt,
                    type
                });

                await Wallet.update({ balance: wallet.balance - amount }, { where: { id: wallet.id } });

                await Transaction.update({ status: result.status }, { where: { id: transaction.id } });

                transaction = await Transaction.findAll({ where: { id: transaction.id } });

                responseJson(res, 200, 'Success', transaction);
            } else {
                throw new Error('Insufficient balance');
            }
        }
    } catch (err) {
        responseJson(res, 500, err.message, null);
    }
});

router.get('/transaction', async (req, res) => {
    try {
        let params = {
            include: 'Customer',
            order: [['createdAt', 'DESC']]
        };
        if (req.query.customer_id) {
            params = {
                where: { customer_id: req.query.customer_id },
                include: 'Customer',
                order: [['createdAt', 'DESC']]
            };
        }
        const transactions = await Transaction.findAll(params);
        responseJson(res, 200, 'Success', transactions);
    } catch (err) {
        responseJson(res, 500, err.message, null);
    }
});

module.exports = router;