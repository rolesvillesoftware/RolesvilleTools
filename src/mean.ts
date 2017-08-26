
import { population } from "./population"; 

export function mean<T>(items: T[], field: string = null): number {
    let meanPopulation = population(items, field); 
    if (meanPopulation == null || meanPopulation.length === 0) { return null; }
    let sum = 0; 

    meanPopulation.forEach(item => sum = sum + item); 
    return sum / meanPopulation.length; 
}

