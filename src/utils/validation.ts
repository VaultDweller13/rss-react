import { RefObject } from 'react';

function textInputIsValid(input: HTMLInputElement | HTMLSelectElement | null) {
  return input && Boolean(input.value);
}

function dateInputIsValid(input: HTMLInputElement | null) {
  if (!input) return false;

  const firstGameDate = new Date('1950');
  const date = new Date(input.value);

  return firstGameDate < date;
}

function platformInpitIsValid(refs: RefObject<HTMLInputElement>[]) {
  const checks = refs.reduce((acc, input) => (input.current?.checked ? acc + 1 : acc), 0);

  if (checks < 1 || checks > 3) return false;

  return true;
}

export { textInputIsValid, dateInputIsValid, platformInpitIsValid };
