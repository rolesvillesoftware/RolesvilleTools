
import { population } from "../src/population";

let testPopulation: { fieldA: number | string; fieldB: number; fieldC: number }[] = [
    { fieldA: 10, fieldB: 100, fieldC: 1000 },
    { fieldA: 20, fieldB: 200, fieldC: 2000 },
    { fieldA: 30, fieldB: 300, fieldC: 3000 },
    { fieldA: "Peter", fieldB: 400, fieldC: 4000 }
]

let testPrimativePopulation = [10, 20, 30];
let testStringPopulation = ['bryan', 'sam', 'roger'];
let testMixPopulation = ['roger', 10, 'peter', 20, 30];

describe("Testing population tool", () => {

    let testResultArray = (array: Array<number>) => {
        it("Result Length is 3", () => expect(array.length).toEqual(3));
        it("First Value 10", () => expect(array[0]).toEqual(10));
        it("First Value 20", () => expect(array[1]).toEqual(20));
        it("First Value 30", () => expect(array[2]).toEqual(30));
    }

    it("Input length is 4", () => expect(testPopulation.length).toEqual(4));

    describe("Object Tests", () => {
        testResultArray(population(testPopulation, "fieldA"));
    });
    describe("Primative Tests", () => {
        testResultArray(population(testPrimativePopulation, null));
        testResultArray(population(testMixPopulation, null));

        it("Non numeric array length = 0", () => expect(population(testStringPopulation, null).length).toEqual(0));
    });
    describe("Mean failure check", () => {
        let primArrayMixed = [10, 'a', 12, 'b', '13'];
        let primArrayMixedPop = population(primArrayMixed, null);
        it("Mixed Array Length = 3", () => expect(primArrayMixedPop.length).toEqual(3));
        it("Mixed Array [0] ==> 10", () => expect(primArrayMixedPop[0]).toEqual(10));
        it("Mixed Array [1] ==> 12", () => expect(primArrayMixedPop[1]).toEqual(12));
        it("Mixed Array [2] ==> 13", () => expect(primArrayMixedPop[2]).toEqual(13));
    });
});

