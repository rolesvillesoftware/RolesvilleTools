"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isNumeric_1 = require("../src/isNumeric");
describe("Test isNumeric", function () {
    it("Test 10", function () { return expect(isNumeric_1.isNumeric(10)).toBeTruthy(); });
    it("Test '10'", function () { return expect(isNumeric_1.isNumeric("10")).toBeTruthy(); });
    it("Test 'Bryan'", function () { return expect(isNumeric_1.isNumeric('bryan')).toBeFalsy(); });
    it("test '324-32'", function () { return expect(isNumeric_1.isNumeric("324-32")).toBeFalsy(); });
});
//# sourceMappingURL=isNumeric.spec.js.map