//Create memoize function
function memoize(fn) {
  const cache = new Map();
  return function (...args) {
    let key = args.toString();
    if (cache.has(key)) {
      return cache.get(key);
    }
    cache.set(key, fn(...args));
    return cache.get(key);
  };
}

function add(a, b) {
  return a + b;
}

function time(fn) {
  console.time();
  fn();
  console.timeEnd();
}

//Create a method called memoize such that:
const memoizeAdd = memoize(add);

time(() => console.log(memoizeAdd(100, 100)));
time(() => console.log(memoizeAdd(100, 817)));
time(() => console.log(memoizeAdd(751, 100)));
time(() => console.log(memoizeAdd(100, 100)));
