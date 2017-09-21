"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isDate(date) {
    return date != null && date instanceof Date && !isNaN(date.valueOf());
}
exports.isDate = isDate;
