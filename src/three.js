console.log('Awaiting test...');

/**
 * Segment function
 * @param {number} x
 * @param {number[]} space
 * @return {number}
 */
const segment = (x, space) => {
  const segments = [];

  for (let i = 0; i < space.length; i++) {
    if (x > space.length) break;

    segments.push(space.slice(i, x++));
  }

  const minimums = segments.map((segment) => Math.min(...segment));

  return Math.max(...minimums);
};

segment();
