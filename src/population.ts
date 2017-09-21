import { isNumeric } from "./isNumeric";

/**
 * Pulls a collection (population) from an array of objects
 * @param array Array of objects to pull population from 
 * @param field object field to get population values from 
 */
export function population<T>(array: T[], field: string): number[] {
    if (array == null || array.length == 0) { return []; }
    let retArray: number[] = [];
    let length = array.length;
    let index = -1;

    while (++index < length) {
        if (array[index]) {
            let value = field == null ? array[index] : array[index][field];

            if (isNumeric(value)) {
                retArray.push(parseFloat(value));
            }
        }
    }
    return retArray;
}
