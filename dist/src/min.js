"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var population_1 = require("./population");
function min(items, field) {
    if (field === void 0) { field = null; }
    var meanPopulation = population_1.population(items, field);
    if (meanPopulation == null || meanPopulation.length === 0) {
        return null;
    }
    var minVal = null;
    meanPopulation.forEach(function (item) { return minVal = minVal == null ? item : Math.min(minVal, item); });
    return minVal;
}
exports.min = min;
//# sourceMappingURL=min.js.map