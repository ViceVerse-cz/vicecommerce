export const range = (start, end) => {
  const range: number[] = [];
  for (let i = start; i <= end; i++) {
    range.push(i);
  }
  return range;
};

export const getYearRange = (step = 20) => range(new Date().getFullYear() - step, new Date().getFullYear() + step);

export const monthNames = [
  "Leden",
  "Únor",
  "Březen",
  "April",
  "květen",
  "červen",
  "červenec",
  "srpen",
  "září",
  "říjen",
  "listopad",
  "prosinec",
];
