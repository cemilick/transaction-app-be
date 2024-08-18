const express = require('express');
const cors = require("cors");
const customerController = require('./controllers/customerController');
const transactionController = require('./controllers/transactionController');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.use([customerController, transactionController]);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});