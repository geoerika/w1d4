function makeLoadedDie() {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5]

  return function() {

    list.push(rollDie());
    return list.shift();
    /* your code here */
  }
}

function rollDie() {
    return Math.floor(1 + Math.random() * 6);
  };

var rollLoadedDie = makeLoadedDie();

console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6
