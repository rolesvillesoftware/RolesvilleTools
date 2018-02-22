"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var population_1 = require("./population");
function mean(items, field) {
    if (field === void 0) { field = null; }
    var meanPopulation = population_1.population(items, field);
    if (meanPopulation == null || meanPopulation.length === 0) {
        return null;
    }
    var sum = 0;
    meanPopulation.forEach(function (item) { return sum = sum + item; });
    return sum / meanPopulation.length;
}
exports.mean = mean;
//# sourceMappingURL=mean.js.map