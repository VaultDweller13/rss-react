import { RefObject } from 'react';

function textInputIsValid(input: HTMLInputElement | HTMLSelectElement | null) {
  return input && Boolean(input.value);
}

// function dateInputIsValid(input: HTMLInputElement | null) {
//   if (!input) return false;

//   const firstGameDate = new Date('1950');
//   const date = new Date(input.value);

//   return firstGameDate < date;
// }

function dateInputIsValid(value: string | null) {
  if (!value) return false;
  const message = 'The first game ever was made in the 1950';

  const firstGameDate = new Date('1950');
  const date = new Date(value);

  return firstGameDate < date || message;
}

function genresInputIsValid(values: string[]) {
  console.log(values);
  const message = 'Please choose 1 to 3 genres';
  if (values.length < 1 || values.length > 3) return message;

  return true;
}

export { textInputIsValid, dateInputIsValid, genresInputIsValid };
