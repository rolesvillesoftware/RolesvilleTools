/**
 * Checks to see if a variable is a number
 * @param value Value to verify if is a number
 */
export function isNumeric(value: any): boolean {
    return !isNaN(parseFloat(value)) && isFinite(value); 
}
