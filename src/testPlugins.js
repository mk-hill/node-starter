const append = str => `${str} appended`;
const reverse = str => `${`${str}`.split('').reverse().join('')} reversed`;

const s = 'missingFunc';

let x; // undefined

const y = {
  missingProp: {
    [s]() {
      return 'word';
    },
  },
};

const z = {
  missingProp: {
    [s]() {
      return 0;
    },
  },
};

// Expect transformed es module, optional chaining, nullish coalescing, pipe
const logString = obj => {
  const word = obj?.missingProp?.[s]() ?? 'fallback word';
  console.log(`Found ${word}\n`, word |> reverse |> append);
};

const test = () => [x, y, z].forEach(logString);

// Expect require in output
export default test;
