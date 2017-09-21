import { isDate } from "../src/isDate";

describe("Test isdate", () => {
    it("Passing new Date => true", ()=> {
        let testDate = new Date(); 
        expect(isDate(testDate)).toBeTruthy();
    });

    it("Passing string Date => true", () => {
        expect(isDate("2017-06-04")).toBeTruthy(); 
    });

    it("Test passing null => false", () => {
        expect(isDate(null)).toBeFalsy(); 
    });

    it ("Test passing zero length string => false", () => {
        let testDate = "";
        expect(isDate(testDate)).toBeFalsy(); 
    });

    it ("Test passing invalid date", () => {
        let testDate = new Date("peterpan");
        expect(isDate(testDate)).toBeFalsy();     
    });
});