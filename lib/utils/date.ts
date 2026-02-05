// Day and month keys for translation (for future use)
export const DAYS = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
export const MONTHS = [
  'january',
  'february',
  'march',
  'april',
  'may',
  'june',
  'july',
  'august',
  'september',
  'october',
  'november',
  'december',
];

/**
 * Formats a date as DD/MM/YYYY
 */
export function formatDate(date: Date): string {
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

/**
 * Safely converts a value to a Date object
 * Returns null if invalid
 */
export function toDate(value: any): Date | null {
  if (value === null || value === undefined) {
    return null;
  }
  const date = value instanceof Date ? value : new Date(value);
  return isNaN(date.getTime()) ? null : date;
}
