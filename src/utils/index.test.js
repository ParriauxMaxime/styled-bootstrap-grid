import { isNumber, suffix } from ".";

it('test isNumber', () => {
  expect(isNumber('a')).toBeFalsy();
  expect(isNumber({test: 1})).toBeFalsy();
  expect(isNumber('lorem ipsum')).toBeFalsy();
  expect(isNumber([2, 3, 4])).toBeFalsy();
  expect(isNumber(true)).toBeFalsy();
  expect(isNumber(false)).toBeFalsy();
  expect(isNumber("100")).toBeTruthy();
  expect(isNumber("1 12 34")).toBeTruthy();
  expect(isNumber(2)).toBeTruthy();
  expect(isNumber(-3)).toBeTruthy();
  expect(isNumber(0)).toBeTruthy();
  expect(isNumber(-999999999999999)).toBeTruthy();
  expect(isNumber(999999999999999)).toBeTruthy();
})

it('test suffix', () => {
  expect(suffix('a')).toEqual("");
  expect(suffix({test: 1})).toEqual("");
  expect(suffix('lorem ipsum')).toEqual("");
  expect(suffix([2, 3, 4])).toEqual("");
  expect(suffix(true)).toEqual("");
  expect(suffix(false)).toEqual("");
  expect(suffix(2)).toEqual("-2");
  expect(suffix(-3)).toEqual("--3");
  expect(suffix(0)).toEqual('-0');
  expect(suffix(-999999999999999)).toEqual('--999999999999999');
  expect(suffix(999999999999999)).toEqual('-999999999999999');
})