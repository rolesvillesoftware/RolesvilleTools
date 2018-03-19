"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var population_1 = require("./population");
function max(items, field) {
    if (field === void 0) { field = null; }
    var meanPopulation = population_1.population(items, field);
    if (meanPopulation == null || meanPopulation.length === 0) {
        return null;
    }
    var maxVal = null;
    meanPopulation.forEach(function (item) { return maxVal = maxVal == null ? item : Math.max(maxVal, item); });
    return maxVal;
}
exports.max = max;
//# sourceMappingURL=max.js.map