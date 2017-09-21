
import { population } from "./population"; 

/**
 * Gets the mean of all the values for a particular field in an object
 * @param items Array of objects to get the mean of one of its properties
 * @param field The field to get the mean
 */
export function mean<T>(items: T[], field: string = null): number {
    let meanPopulation = population(items, field); 
    if (meanPopulation == null || meanPopulation.length === 0) { return null; }
    let sum = 0; 

    meanPopulation.forEach(item => sum = sum + item); 
    return sum / meanPopulation.length; 
}

