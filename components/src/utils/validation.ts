function textInputIsValid(input: HTMLInputElement | HTMLSelectElement | null) {
  return input && Boolean(input.value);
}

function dateInputIsValid(input: HTMLInputElement | null) {
  if (!input) return false;

  const firstGameDate = new Date('1950');
  const date = new Date(input.value);

  return firstGameDate < date;
}

export { textInputIsValid, dateInputIsValid };
