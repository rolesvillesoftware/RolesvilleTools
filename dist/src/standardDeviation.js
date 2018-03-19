"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var population_1 = require("./population");
var mean_1 = require("./mean");
function standardDeviation(items, field) {
    if (field === void 0) { field = null; }
    var pop = population_1.population(items, field);
    if (pop == null || pop.length <= 1) {
        return 0;
    }
    var m = mean_1.mean(pop);
    var s = 0;
    pop.forEach(function (item) {
        s += Math.pow(item - m, 2);
    });
    var d = s / (pop.length - 1);
    return Math.sqrt(d);
}
exports.standardDeviation = standardDeviation;
//# sourceMappingURL=standardDeviation.js.map