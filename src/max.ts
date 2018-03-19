
import { population } from "./population";

export function max<T>(items: T[], field: string = null): number {
    let meanPopulation = population(items, field);
    if (meanPopulation == null || meanPopulation.length === 0) { return null; }
    let maxVal = 0;

    meanPopulation.forEach(item => maxVal = Math.max(maxVal, item));
    return maxVal
}

