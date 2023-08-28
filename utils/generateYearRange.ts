export function generateYearRange(startYear: number, endYear: number) {
  const years = [];

  for (let year = startYear; year <= endYear; year++) {
    years.push(year);
  }

  return years;
}
