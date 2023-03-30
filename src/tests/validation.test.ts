import { textInputIsValid, dateInputIsValid } from '../utils/validation';

describe('textInputIsValid', () => {
  it('should return true if input has value', () => {
    const input = document.createElement('input');
    input.setAttribute('value', 'test value');

    expect(textInputIsValid(input)).toBeTruthy();
  });
});

describe('dateInputIsValid', () => {
  it('should return true if input has value', () => {
    const input = document.createElement('input');
    input.setAttribute('value', '03-27-2023');

    expect(dateInputIsValid(input)).toBeTruthy();
  });

  it('should return false if year < 1950', () => {
    const input = document.createElement('input');
    input.setAttribute('value', '03-27-1900');
    console.log(input.value);

    expect(dateInputIsValid(input)).toBeFalsy();
  });
});
