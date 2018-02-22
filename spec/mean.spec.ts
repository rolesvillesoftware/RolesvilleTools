import { mean } from "../src/mean"; 
let testArray = [
    {fieldA: 10, fieldB: 20, fieldC: 30},
    {fieldA: 12, fieldB: 22, fieldC: 32},
    {fieldA: 13, fieldB: 23, fieldC: 33},    
];

let primArrayString = ['a','b','c'];
let primArrayNumber = [10, 12, 13];
let primArrayMixed = [10, 'a', 12, 'b', '13'];

describe("Mean Tests", () => {

    var fieldAResults = mean(testArray, "fieldA"); 
    it ("mean for fieldA == 11.6667", () => expect(fieldAResults.toFixed(4)).toEqual("11.6667"));
    it ("string array should have a mean of null", () => expect(mean(primArrayString)).toBeNull());
    it ("number array should have a mean of 11.6667", () => expect(mean(primArrayNumber).toFixed(4)).toEqual("11.6667"));
    it ("Mixed array should have a mean of 11.6667", () => expect(mean(primArrayMixed).toFixed(4)).toEqual("11.6667"));
});