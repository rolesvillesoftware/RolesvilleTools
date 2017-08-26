import { isNumeric } from "./isNumeric";

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
