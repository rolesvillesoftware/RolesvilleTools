"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var population_1 = require("../src/population");
var testPopulation = [
    { fieldA: 10, fieldB: 100, fieldC: 1000 },
    { fieldA: 20, fieldB: 200, fieldC: 2000 },
    { fieldA: 30, fieldB: 300, fieldC: 3000 },
    { fieldA: "Peter", fieldB: 400, fieldC: 4000 }
];
var testPrimativePopulation = [10, 20, 30];
var testStringPopulation = ['bryan', 'sam', 'roger'];
var testMixPopulation = ['roger', 10, 'peter', 20, 30];
describe("Testing population tool", function () {
    var testResultArray = function (array) {
        it("Result Length is 3", function () { return expect(array.length).toEqual(3); });
        it("First Value 10", function () { return expect(array[0]).toEqual(10); });
        it("First Value 20", function () { return expect(array[1]).toEqual(20); });
        it("First Value 30", function () { return expect(array[2]).toEqual(30); });
    };
    it("Input length is 4", function () { return expect(testPopulation.length).toEqual(4); });
    describe("Object Tests", function () {
        testResultArray(population_1.population(testPopulation, "fieldA"));
    });
    describe("Primative Tests", function () {
        testResultArray(population_1.population(testPrimativePopulation, null));
        testResultArray(population_1.population(testMixPopulation, null));
        it("Non numeric array length = 0", function () { return expect(population_1.population(testStringPopulation, null).length).toEqual(0); });
    });
    describe("Mean failure check", function () {
        var primArrayMixed = [10, 'a', 12, 'b', '13'];
        var primArrayMixedPop = population_1.population(primArrayMixed, null);
        it("Mixed Array Length = 3", function () { return expect(primArrayMixedPop.length).toEqual(3); });
        it("Mixed Array [0] ==> 10", function () { return expect(primArrayMixedPop[0]).toEqual(10); });
        it("Mixed Array [1] ==> 12", function () { return expect(primArrayMixedPop[1]).toEqual(12); });
        it("Mixed Array [2] ==> 13", function () { return expect(primArrayMixedPop[2]).toEqual(13); });
    });
});
//# sourceMappingURL=population.spec.js.map