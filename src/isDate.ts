export function isDate(date: Date): boolean {
	return date != null && date instanceof Date && !isNaN(date.valueOf()); 
}

