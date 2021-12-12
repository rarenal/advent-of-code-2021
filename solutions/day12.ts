import { flatten } from '../array-utils';
import { readInput } from '../file-utils';

// Common
export const getInput = () => readInput('day12.txt')

const isLowercase = (string: string) => string === string.toLowerCase();

const alreadyInPath = (path: string, value: string) =>
  path.split('-')
    .some((subpath) => subpath === value)

const canVisitTwice = (path: string) => {
  const lowercaseSteps = path.split('-')
    .filter(isLowercase);

  return (new Set(lowercaseSteps)).size === lowercaseSteps.length;
}

const calculatePaths = (paths: string[], steps: string[], discardFn: (possibleNext: string, path: string) => boolean): number => {
  let changed = false;
  while (!changed) {
    const subPaths = paths.map((path) => {
      if (path.includes('end')) {
        return [path];
      }

      const lastStep = path.split('-').pop();
      const nextSteps = steps
        .filter(step => step.split('-')
          .some((value) => value === lastStep))
        .map((step) => {
          const possibleNext = step.split('-')
            .filter((value) => value !== lastStep)[0];

          if (possibleNext === 'start' || discardFn(possibleNext, path)) {
            return undefined;
          }

          return possibleNext;
        })
        .filter(step => step !== undefined);

      return nextSteps.length > 0
        ? nextSteps.map((step) => `${path}-${step}`)
        : [];
    });

    const newPaths = flatten(subPaths);
    changed = newPaths.length === paths.length;
    paths = newPaths;
  }

  return paths.filter((pathi) => pathi.includes('end')).length;
};


// Solutions
export const part1 = (steps: string[]): number => {
	let initialPaths = ['start'];

  const discardFn = (possibleNext: string, path: string) => isLowercase(possibleNext) && alreadyInPath(path, possibleNext);

  return calculatePaths(initialPaths, steps, discardFn);
}

export const part2 = (steps: string[]): number => {
  const initialPaths = ['start'];
  const discardFn = (possibleNext: string, path: string) => isLowercase(possibleNext) && alreadyInPath(path, possibleNext) && !canVisitTwice(path);

  return calculatePaths(initialPaths, steps, discardFn);
}