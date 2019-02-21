const wrapLog = function (callback, name) {
  return function() {
    result = callback.apply(null, arguments);
    let strg = name + '(' + Object.values(arguments).join(', ') + ')' + ' => ' + result;
    console.log(strg);
    return result;
  }
};

const area = function (x, y) {
  return x * y;
};
let logArea = wrapLog(area, "area");

logArea(5, 3); // area(5, 3) => 15
logArea(3, 2); // area(3, 2) => 6

const volume = function (x, y, z) {
  return x * y * z;
};
let logVolume = wrapLog(volume, "volume");

logVolume(5, 3, 2); // volume(5, 3, 2) => 30
logVolume(3, 2, 4); // volume(3, 2, 4) => 24