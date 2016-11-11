import { find } from '../../src/01-algorithms/find'

describe('chapter1.find', function() {

  it('should return -1 if no such element', function() {
    expect(find([2, 1, 4, 2, 3], 5)).toBe(-1);
  });

  it('should return first index at which element is found', function() {
    expect(find([5, 1, 2, 4, 2, 3, 8, 9], 2)).toBe(2);
  });
});