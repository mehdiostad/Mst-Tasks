function operations(ops) {
  let arr = ops.split(" ");
  let sum = 0;
  let newArray = [];
  arr.forEach((element) => {
    if (element * 1) {
      newArray.push(element);
    }
  });
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] * 1 == "number") {
    } else if (arr[i] == "D") {
      newArray.push(newArray[newArray.length - 1] * 2);
    } else if (arr[i] == "R") {
      newArray.pop();
    } else if (arr[i] == "+") {
      newArray.push(arr[arr.length - 2] + arr[arr.length - 1]);
    }
  }
  let changedNewArr = newArray.map((item) => {
    return item * 1;
  });
  for (i in changedNewArr) {
    sum += changedNewArr[i];
  }
  console.log(sum);
}
let operation = "-2 5 D + R";
operations(operation);
