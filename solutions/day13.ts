import { readInput } from '../file-utils';

// Common
export const getInput = (): [string[], string[]] => {
  const input = readInput('day13.txt');

  return [
    input.filter((row) => !row.includes('fold along')),
    input.filter((row) => row.includes('fold along')).map((value) => value.split('fold along ')[1]),
  ]
};

const markMap = (map: string[][], i: number, j: number) => {
  const newMap = map.map((row) => [...row]);
  if (newMap[i] === undefined) {
    newMap[i] = [];
  }

  newMap[i][j] = '#';

  return newMap;
}

const countMarkedPoints = (map: string[][]): number => {
  return map.reduce((total, row) => {
    return total + row.reduce((rowTotal, value) => {
      return value === '#' ? rowTotal + 1 : rowTotal;
    }, 0)
  }, 0)
}

// Solutions
export const part1 = (initialPoints: string[], foldInstructions: string[]): number => {
	let map: string[][] = [];

	initialPoints.forEach(((value) => {
	  const [x, y] = value.split(',').map(Number);

    map = markMap(map, y, x);
  }));

	const instruction = foldInstructions[0];
  const [direction, amount] = instruction.split('=');

	  if (direction === 'y') {
	    const secondHalf = map.splice(Number(amount) - 1);

	    const newArr = secondHalf.slice(2).reverse();
	    newArr.forEach((row, i) => {
        row.forEach((value, j) => {
          if (value === '#') {
            map = markMap(map, i, j);
          }
        })
      });
    } else {
	    const maxRow =  map.reduce((max, row) => Math.max(max, row.length), 0)
	    map = map.map((row) => {
	      const halfIndex = Number(amount);
	      const newRow = Array(maxRow).fill(null).map((_,index) => row[index]);
	      const firstHalf = newRow.slice(0, halfIndex);
        const secondHalf = newRow.slice(halfIndex + 1).reverse();

        secondHalf.forEach((value, index) => {
	        if (value === '#') {
            firstHalf[index] = '#';
          }
        });

	      return firstHalf;
      });
    }

  return countMarkedPoints(map);
}

export const part2 = (initialPoints: string[], foldInstructions: string[]): void => {
  let map: string[][] = [];

  initialPoints.forEach(((value) => {
    const [x, y] = value.split(',').map(Number);

    map = markMap(map, y, x);
  }));


  foldInstructions.map((instruction) => {
    const [direction, amount] = instruction.split('=');

    if (direction === 'y') {
      const secondHalf = map.splice(Number(amount) - 1);

      const newArr = secondHalf.slice(2)
        .reverse();
      newArr.forEach((row, i) => {
        row.forEach((value, j) => {
          if (value === '#') {
            map = markMap(map, i, j);
          }
        });
      });
    } else {
      const maxRow = map.reduce((max, row) => Math.max(max, row.length), 0);
      map = map.map((row) => {
        const halfIndex = Number(amount);
        const newRow = Array(maxRow)
          .fill(null)
          .map((_, index) => row[index]);
        const firstHalf = newRow.slice(0, halfIndex);
        const secondHalf = newRow.slice(halfIndex + 1)
          .reverse();

        secondHalf.forEach((value, index) => {
          if (value === '#') {
            firstHalf[index] = '#';
          }
        });

        return firstHalf;
      });
    }
  });

  map = map.map((row) => row.map((value => value ? '■' : '□')));

  console.log(map);
}