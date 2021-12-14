import { part1, part2, getInput } from './day14';

const polymerTemplate = 'NNCB';
const pairInsertion = [
  'CH -> B',
  'HH -> N',
  'CB -> H',
  'NH -> C',
  'HB -> C',
  'HC -> B',
  'HN -> C',
  'NN -> C',
  'BH -> H',
  'NC -> B',
  'NB -> B',
  'BN -> B',
  'BB -> N',
  'BC -> B',
  'CC -> N',
  'CN -> C',
];

describe('Day 14', () => {
  it('should solve test input for part 1', () => {
    expect(part1(polymerTemplate, pairInsertion, 10)).toEqual(1588);
  });

  it('should solve part 1', () => {
    const result = part1(...getInput(), 10);
    console.warn('Part 1: ',result);

    expect(result).not.toBeNaN();
  });

  it('should solve test input for part 2', () => {
    expect(part2(polymerTemplate, pairInsertion, 40)).toEqual(2188189693529);
  });

  it('should solve part 2', () => {
    const result = part2(...getInput(), 40);
    console.warn('Part 2: ',result);

    expect(result).not.toBeNaN();
  });
});
