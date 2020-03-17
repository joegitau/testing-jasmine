import { greet } from './greet';

describe('greeting', () => {
  it('should contain Joe', () => {
    const result = greet('Joe').toLowerCase();
    expect(result).toContain('joe');
  });
});
