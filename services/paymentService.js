const axios = require('axios');
const base64 = require('base-64');
const { responseJson } = require('../utils/helper');
const { response } = require('express');

const integrateWithThirdAPI = async (fullName, payload) => {
    try {
        // Encode the full name to base64
        const encodedName = base64.encode(fullName);

        const { order_id, amount, timestamp, type } = payload;

        const Authorization = `Bearer ${encodedName}`;
        const response = await axios.post('https://yourdomain.com/' + type, {
            headers: { Authorization },
            data: { order_id, amount, timestamp }
        });

        return response.data;
    } catch (error) {
        return {
            order_id: payload.order_id,
            amount: payload.amount,
            status: 1
        };
    }
}

module.exports = { integrateWithThirdAPI };