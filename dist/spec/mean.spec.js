"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mean_1 = require("../src/mean");
var testArray = [
    { fieldA: 10, fieldB: 20, fieldC: 30 },
    { fieldA: 12, fieldB: 22, fieldC: 32 },
    { fieldA: 13, fieldB: 23, fieldC: 33 },
];
var primArrayString = ['a', 'b', 'c'];
var primArrayNumber = [10, 12, 13];
var primArrayMixed = [10, 'a', 12, 'b', '13'];
describe("Mean Tests", function () {
    var fieldAResults = mean_1.mean(testArray, "fieldA");
    it("mean for fieldA == 11.6667", function () { return expect(fieldAResults.toFixed(4)).toEqual("11.6667"); });
    it("string array should have a mean of null", function () { return expect(mean_1.mean(primArrayString)).toBeNull(); });
    it("number array should have a mean of 11.6667", function () { return expect(mean_1.mean(primArrayNumber).toFixed(4)).toEqual("11.6667"); });
    it("Mixed array should have a mean of 11.6667", function () { return expect(mean_1.mean(primArrayMixed).toFixed(4)).toEqual("11.6667"); });
});
//# sourceMappingURL=mean.spec.js.map