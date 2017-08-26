"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isNumeric_1 = require("./isNumeric");
function population(array, field) {
    if (array == null || array.length == 0) {
        return [];
    }
    var retArray = [];
    var length = array.length;
    var index = -1;
    while (++index < length) {
        if (array[index]) {
            var value = field == null ? array[index] : array[index][field];
            if (isNumeric_1.isNumeric(value)) {
                retArray.push(parseFloat(value));
            }
        }
    }
    return retArray;
}
exports.population = population;
