# Technical Test Coding Collective BE Node JS

This project for Technical Test on Coding Collective that built with Node.js, Express, and Sequelize. It allows administrator to manage their customers wallet and transaction, including deposits and withdrawals.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Models](#models)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/wallet-transaction-system.git
    cd wallet-transaction-system
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Set up the database configuration:
    - Create a `.env` file in the root directory and add your database configuration:
        ```env
        DB_USER=your_db_user
        DB_PASSWORD=your_db_password
        DB_HOST=your_db_host
        DB_PORT=your_db_port
        DB_NAME=your_db_name
        ```

4. Run the database migrations:
    ```bash
    npx sequelize-cli db:migrate
    ```

5. Start the server:
    ```bash
    npm start
    ```

## Usage

To use the API, you can send HTTP requests to the endpoints defined in the project. Below are the available endpoints and their descriptions.

## API Endpoints

### Customer Endpoints

- **Get All Customers**
    - `GET /customer`
    - Response:
        ```json
        {
            "status": 200,
            "message": "Success",
            "data": [
                {
                    "id": 1,
                    "username": "examplecustomer",
                    "Wallet": {
                        "id": 1,
                        "balance": 100.0
                    }
                },
                ...
            ]
        }
        ```

- **Get a Single Customer**
    - `GET /customer/:id`
    - Response:
        ```json
        {
            "status": 200,
            "message": "Success",
            "data": {
                "id": 1,
                "username": "examplecustomer",
                "Wallet": {
                    "id": 1,
                    "balance": 100.0
                }
            }
        }
        ```

### Transaction Endpoints

- **Create Transaction**
    - `POST /transactions`
    - Request Body:
        ```json
        {
            "customer_id": 1,
            "amount": 50.0,
            "type": "deposit"
        }
        ```
    - Response:
        ```json
        {
            "id": 1,
            "customer_id": 1,
            "amount": 50.0,
            "type": "deposit",
            "status": 0,
            "createdAt": "2023-01-01T00:00:00.000Z",
            "updatedAt": "2023-01-01T00:00:00.000Z"
        }
        ```

## Models

### Customer

- **Attributes:**
    - [`id`](command:_github.copilot.openSymbolFromReferences?%5B%22id%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22e%3A%5C%5CKerja%5C%5CCoding%20Collective%5C%5Ctechnical1%5C%5Ccontrollers%5C%5CtransactionController.js%22%2C%22_sep%22%3A1%2C%22external%22%3A%22file%3A%2F%2F%2Fe%253A%2FKerja%2FCoding%2520Collective%2Ftechnical1%2Fcontrollers%2FtransactionController.js%22%2C%22path%22%3A%22%2Fe%3A%2FKerja%2FCoding%20Collective%2Ftechnical1%2Fcontrollers%2FtransactionController.js%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A24%2C%22character%22%3A38%7D%7D%5D%5D "Go to definition"): Integer, Primary Key, Auto Increment
    - `name`: String, Not Null
    - `phone`: String, Nullable
    - `email`: String, Not Null

### Wallet

- **Attributes:**
    - [`id`](command:_github.copilot.openSymbolFromReferences?%5B%22id%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22e%3A%5C%5CKerja%5C%5CCoding%20Collective%5C%5Ctechnical1%5C%5Ccontrollers%5C%5CtransactionController.js%22%2C%22_sep%22%3A1%2C%22external%22%3A%22file%3A%2F%2F%2Fe%253A%2FKerja%2FCoding%2520Collective%2Ftechnical1%2Fcontrollers%2FtransactionController.js%22%2C%22path%22%3A%22%2Fe%3A%2FKerja%2FCoding%20Collective%2Ftechnical1%2Fcontrollers%2FtransactionController.js%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A24%2C%22character%22%3A38%7D%7D%5D%5D "Go to definition"): Integer, Primary Key, Auto Increment
    - `customerId`: Integer, Foreign Key, Not Null
    - [`balance`](command:_github.copilot.openSymbolFromReferences?%5B%22balance%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22e%3A%5C%5CKerja%5C%5CCoding%20Collective%5C%5Ctechnical1%5C%5Ccontrollers%5C%5CtransactionController.js%22%2C%22_sep%22%3A1%2C%22external%22%3A%22file%3A%2F%2F%2Fe%253A%2FKerja%2FCoding%2520Collective%2Ftechnical1%2Fcontrollers%2FtransactionController.js%22%2C%22path%22%3A%22%2Fe%3A%2FKerja%2FCoding%20Collective%2Ftechnical1%2Fcontrollers%2FtransactionController.js%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A30%2C%22character%22%3A34%7D%7D%5D%5D "Go to definition"): Double, Not Null

### Transaction

- **Attributes:**
    - [`id`](command:_github.copilot.openSymbolFromReferences?%5B%22id%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22e%3A%5C%5CKerja%5C%5CCoding%20Collective%5C%5Ctechnical1%5C%5Ccontrollers%5C%5CtransactionController.js%22%2C%22_sep%22%3A1%2C%22external%22%3A%22file%3A%2F%2F%2Fe%253A%2FKerja%2FCoding%2520Collective%2Ftechnical1%2Fcontrollers%2FtransactionController.js%22%2C%22path%22%3A%22%2Fe%3A%2FKerja%2FCoding%20Collective%2Ftechnical1%2Fcontrollers%2FtransactionController.js%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A24%2C%22character%22%3A38%7D%7D%5D%5D "Go to definition"): Integer, Primary Key, Auto Increment
    - [`customer_id`](command:_github.copilot.openSymbolFromReferences?%5B%22customer_id%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22e%3A%5C%5CKerja%5C%5CCoding%20Collective%5C%5Ctechnical1%5C%5Ccontrollers%5C%5CtransactionController.js%22%2C%22_sep%22%3A1%2C%22external%22%3A%22file%3A%2F%2F%2Fe%253A%2FKerja%2FCoding%2520Collective%2Ftechnical1%2Fcontrollers%2FtransactionController.js%22%2C%22path%22%3A%22%2Fe%3A%2FKerja%2FCoding%20Collective%2Ftechnical1%2Fcontrollers%2FtransactionController.js%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A22%2C%22character%22%3A57%7D%7D%5D%5D "Go to definition"): Integer, Foreign Key, Not Null
    - [`amount`](command:_github.copilot.openSymbolFromReferences?%5B%22amount%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22e%3A%5C%5CKerja%5C%5CCoding%20Collective%5C%5Ctechnical1%5C%5Ccontrollers%5C%5CtransactionController.js%22%2C%22_sep%22%3A1%2C%22external%22%3A%22file%3A%2F%2F%2Fe%253A%2FKerja%2FCoding%2520Collective%2Ftechnical1%2Fcontrollers%2FtransactionController.js%22%2C%22path%22%3A%22%2Fe%3A%2FKerja%2FCoding%20Collective%2Ftechnical1%2Fcontrollers%2FtransactionController.js%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A25%2C%22character%22%3A16%7D%7D%5D%5D "Go to definition"): Double, Not Null
    - [`type`](command:_github.copilot.openSymbolFromReferences?%5B%22type%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22e%3A%5C%5CKerja%5C%5CCoding%20Collective%5C%5Ctechnical1%5C%5Ccontrollers%5C%5CtransactionController.js%22%2C%22_sep%22%3A1%2C%22external%22%3A%22file%3A%2F%2F%2Fe%253A%2FKerja%2FCoding%2520Collective%2Ftechnical1%2Fcontrollers%2FtransactionController.js%22%2C%22path%22%3A%22%2Fe%3A%2FKerja%2FCoding%20Collective%2Ftechnical1%2Fcontrollers%2FtransactionController.js%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A21%2C%22character%22%3A12%7D%7D%5D%5D "Go to definition"): String, Not Null
    - [`status`](command:_github.copilot.openSymbolFromReferences?%5B%22status%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22e%3A%5C%5CKerja%5C%5CCoding%20Collective%5C%5Ctechnical1%5C%5Ccontrollers%5C%5CtransactionController.js%22%2C%22_sep%22%3A1%2C%22external%22%3A%22file%3A%2F%2F%2Fe%253A%2FKerja%2FCoding%2520Collective%2Ftechnical1%2Fcontrollers%2FtransactionController.js%22%2C%22path%22%3A%22%2Fe%3A%2FKerja%2FCoding%20Collective%2Ftechnical1%2Fcontrollers%2FtransactionController.js%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A22%2C%22character%22%3A84%7D%7D%5D%5D "Go to definition"): Integer, Not Null

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.

## License

This project is licensed under the MIT License.
