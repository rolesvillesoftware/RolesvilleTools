
import { population } from "./population";

export function max<T>(items: T[], field: string = null): number {
    let meanPopulation = population(items, field);
    if (meanPopulation == null || meanPopulation.length === 0) { return null; }
    let maxVal: number = null;

    meanPopulation.forEach(item => maxVal = maxVal == null ? item : Math.max(maxVal, item));
    return maxVal
}

