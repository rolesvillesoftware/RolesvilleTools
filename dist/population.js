"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function population(array, field) {
    if (array == null || array.length == 0) {
        return [];
    }
    var retArray = [];
    var length = array.length;
    var index = -1;
    while (++index < length) {
        if (array[index]) {
            retArray.push(array[index][field]);
        }
    }
    return retArray;
}
exports.population = population;
//# sourceMappingURL=population.js.map