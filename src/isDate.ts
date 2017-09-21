/**
 * Checks to see if the variable is a date value
 * @param date Date|string - input parameter to check if is a date
 */
export function isDate(date: Date|string): boolean {
	let work: Date|string = date; 
	if (typeof work === 'string') {
		if (work == null || work.length === 0) { 
			work = null; 
		} else { 
			work = new Date(work); 
		}
	}
	return work != null && work instanceof Date && !isNaN(work.valueOf()); 
}

