import type { MonthYear, Range } from './models';

// Full years between two "MM/YYYY" dates; "now" (or nothing) means today.
const yearsBetween = (from: MonthYear, to: MonthYear | 'now' = 'now') => {
  const months = (d: MonthYear | 'now') => {
    if (d === 'now') return new Date().getFullYear() * 12 + new Date().getMonth();
    const [m, y] = d.split('/').map(Number) as [number, number];
    return y * 12 + m - 1;
  };
  return Math.floor((months(to) - months(from)) / 12);
};
// full years in "MM/YYYY – MM/YYYY" or "MM/YYYY – now"
export const spanOf = (period: Range) => yearsBetween(...(period.split(' – ') as [MonthYear, MonthYear | 'now']));

// Since the first professional job (Ordina); student jobs don't count.
export const yearsOfExperience = () => yearsBetween('08/2017');
