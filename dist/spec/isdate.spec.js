"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isDate_1 = require("../src/isDate");
describe("Test isdate", function () {
    it("Passing new Date => true", function () {
        var testDate = new Date();
        expect(isDate_1.isDate(testDate)).toBeTruthy();
    });
    it("Passing string Date => true", function () {
        expect(isDate_1.isDate("2017-06-04")).toBeTruthy();
    });
    it("Test passing null => false", function () {
        expect(isDate_1.isDate(null)).toBeFalsy();
    });
    it("Test passing zero length string => false", function () {
        var testDate = "";
        expect(isDate_1.isDate(testDate)).toBeFalsy();
    });
    it("Test passing invalid date", function () {
        var testDate = new Date("peterpan");
        expect(isDate_1.isDate(testDate)).toBeFalsy();
    });
});
//# sourceMappingURL=isdate.spec.js.map