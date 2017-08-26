import { isNumeric } from "../src/isNumeric";

describe("Test isNumeric", () => {

    it("Test 10", () => expect(isNumeric(10)).toBeTruthy());
    it("Test '10'", () => expect(isNumeric("10")).toBeTruthy());
    it("Test 'Bryan'", () => expect(isNumeric('bryan')).toBeFalsy()); 
    it("test '324-32'", () => expect(isNumeric("324-32")).toBeFalsy()); 
});