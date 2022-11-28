function memoize(fn) {
  const cache = new Map();
  return function (...args) {
    const key = args.toString();
    // console.log("Key are" + key);
    // console.log(cache);
    if (cache.has(key)) {
      return cache.get(key);
    }
    cache.set(key, fn(...args));
    return cache.get(key);
  };
}

function add(...args) {
  //console.log(args);
  var sum = args.reduce((a, b) => {
    return a + b;
  });
  return sum;
}

const memoizeAdd = memoize(add);

console.log(memoizeAdd(100, 100));
console.log(memoizeAdd(100));
console.log(memoizeAdd(100, 200));
console.log(memoizeAdd(100, 200));
console.log(memoizeAdd(100, 200, 300, 400));
console.log(memoizeAdd(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
