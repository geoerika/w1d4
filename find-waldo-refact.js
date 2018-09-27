function findWaldo(arr, found) {
  arr.forEach(findName);
}

function findName(name, i) {
    if (name === "Erika") {
      found(i);   // execute callback
    }
  }

function actionWhenFound(index) {
  console.log("Found him at index: ", index);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);