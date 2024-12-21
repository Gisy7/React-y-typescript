"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleInputErrors = void 0;
const express_validator_1 = require("express-validator");
const handleInputErrors = (req, res, next) => {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        res.status(400).send({ errors: errors.array() });
        return;
    }
    next();
};
exports.handleInputErrors = handleInputErrors;
//# sourceMappingURL=index.js.map