function arrayDiff(a, b) {
  let arr = [];
  for (let i = 0; i < a.length; i++) {
    arr.push(a[i]);
    for (let j = 0; j < b.length; j++) {
      if (a[i] === b[j]) {
        arr.pop();
      }
    }
  }
  return arr;
}
