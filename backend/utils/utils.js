const { validationResult, body, check } = require("express-validator");

exports.checkError = (req) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const error = new Error("Validation failed, entered data is incorrect");
        error.statusCode = 422;
        error.data = errors.array();
        throw error;
    }
};

exports.bodyNotEmpty = key => {
    return body(key).notEmpty().withMessage(`${key} field is empty`);
};

exports.ValidateDateFormat = key =>{
    return check(key).matches(/([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/).withMessage(`${key} format should be (YYYY-MM-DD)`)
}