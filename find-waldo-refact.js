function findWaldo(arr, found) {
  arr.forEach(function(name) {
    if (name === "Erika") {
      found();   // execute callback
    }
  });
}

function actionWhenFound() {
  console.log("Found him!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);