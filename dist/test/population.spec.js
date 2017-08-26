"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var population_1 = require("../src/population");
var testPopulation = [
    { fieldA: 10, fieldB: 100, fieldC: 1000 },
    { fieldA: 20, fieldB: 200, fieldC: 2000 },
    { fieldA: 30, fieldB: 300, fieldC: 3000 }
];
describe("Testing population tool", function () {
    var results = population_1.population(testPopulation, "fieldA");
    it("Length is 3", function () { return expect(results.length).toEqual(4); });
});
//# sourceMappingURL=population.spec.js.map