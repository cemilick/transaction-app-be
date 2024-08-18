const responseJson = (res, status, message, data) => {
    res.status(status).json({
        message,
        status,
        data
    });
}

module.exports = {
    responseJson
};