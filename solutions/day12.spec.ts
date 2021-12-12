import { part1, part2, getInput} from './day12';

const testInput1 = ['start-A', 'start-b', 'A-c', 'A-b', 'b-d', 'A-end', 'b-end'];

const testInput2 = ['dc-end', 'HN-start', 'start-kj', 'dc-start', 'dc-HN', 'LN-dc', 'HN-end', 'kj-sa', 'kj-HN', 'kj-dc'];

const testInput3 = ['fs-end', 'he-DX', 'fs-he', 'start-DX', 'pj-DX', 'end-zg', 'zg-sl', 'zg-pj', 'pj-he', 'RW-he', 'fs-DX', 'pj-RW',
  'zg-RW', 'start-pj', 'he-WI', 'zg-he', 'pj-fs', 'start-RW'];

describe('Day 12', () => {
  it('should solve test input for part 1', () => {
    expect(part1(testInput1)).toEqual(10);
    expect(part1(testInput2)).toEqual(19);
    expect(part1(testInput3)).toEqual(226);
  });

  it('should solve part 1', () => {
    const result = part1(getInput());
    console.warn('Part 1: ',result);

    expect(result).not.toBeNaN();
  });

  it('should solve test input for part 2', () => {
    expect(part2(testInput1)).toEqual(36);
    expect(part2(testInput2)).toEqual(103);
    expect(part2(testInput3)).toEqual(3509);
  });

  it('should solve part 2', () => {
    const result = part2(getInput());
    console.warn('Part 2: ',result);

    expect(result).not.toBeNaN();
  });
});
