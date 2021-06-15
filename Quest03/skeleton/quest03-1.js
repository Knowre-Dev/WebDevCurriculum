const getBlanks = (n) => {
  return [...Array(n)].reduce((acc) => acc + ' ', '');
}

const getStars = (n) => {
  return [...Array(n)].reduce((acc) => acc + '*', '');
}

const getLine = (n, i) => {
  return getBlanks(n - i - 1) + getStars((i * 2) + 1);
}
const execute = (n) => {
  return  [...Array(n).keys()]
    .map(i => getLine(n, i))
    .join('\n');
}

const n = Number(prompt());
console.log(execute(n));
