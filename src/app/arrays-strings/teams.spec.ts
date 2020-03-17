import { getTeams } from './teams';

describe('teams', () => {
  it('should show the permitted teams', () => {
    const result = getTeams();
    expect(result).toContain('liverpool');
    expect(result).toContain('barcelona');
    expect(result).toContain('bayern munich');
  });
});
