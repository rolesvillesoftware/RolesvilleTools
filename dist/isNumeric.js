"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isNumeric(value) {
    return !isNaN(parseFloat(value)) && isFinite(value);
}
exports.isNumeric = isNumeric;
