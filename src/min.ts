
import { population } from "./population";

export function min<T>(items: T[], field: string = null): number {
    let meanPopulation = population(items, field);
    if (meanPopulation == null || meanPopulation.length === 0) { return null; }
    let minVal = 0;

    meanPopulation.forEach(item => minVal = Math.min(minVal, item));
    return minVal
}

