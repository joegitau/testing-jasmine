import { calculate } from './calculate';

describe('calculate', () => {
  it('should return 0 if input is negative', () => {
    const result = calculate(-1);
    expect(result).toBe(0);
  });

  it('should increment by 1', () => {
    const result = calculate(1);
    expect(result).toBe(2);
  });
});
