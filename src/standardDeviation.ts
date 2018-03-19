import { population } from "./population";
import { mean } from "./mean";

export function standardDeviation<T>(items: T[], field: string = null): number {
    let pop = population(items, field);
    if (pop == null || pop.length <= 1) {
        return 0;
    }

    const m = mean(pop);
    let s = 0;

    pop.forEach(item => {
        s += Math.pow(item - m,  2);
    });

    let d = s / (pop.length - 1);
    return Math.sqrt(d);
}
