import { numberFormat, idFormat, humanTime, standardTime } from './filter';

describe('filter - numberFormat', () => {
  test('number formatted: 662463', () => {
    expect(numberFormat(662463)).toBe('662,463');
  });

  test('number formatted: 12', () => {
    expect(numberFormat(12)).toBe('12');
  });

  test('number formatted: 1000000', () => {
    expect(numberFormat(1000000)).toBe('1,000,000');
  });
});

describe('filter - idFormat', () => {
  test('idFormat', () => {
    expect(idFormat('00000000000000000007878ec04bb2b2e12317804810f4c26033585b3f81ffaa')).toBe('0000-ffaa');
  });
});

describe('filter - humanTime', () => {
  test('humanTime', () => {
    expect(humanTime(1608620982)).toBe('December 22, 2020 15:09:42');
  });
});

describe('filter - standardTime', () => {
  test('standardTime', () => {
    expect(standardTime(1608620982)).toBe('12/22/2020, 15:09:42');
  });
});
