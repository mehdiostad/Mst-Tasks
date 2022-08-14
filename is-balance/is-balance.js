let result = null;
let isBalance = function (s) {
  if (typeof s !== "string" || s.length % 2 !== 0) {
    result = false;
    return result;
  }
  let i = 0;
  let arr = [];
  while (i < s.length) {
    if (s[i] === "{" || s[i] === "(" || s[i] === "[") {
      arr.push(s[i]);
    } else if (s[i] === "}" && arr[arr.length - 1] === "{") {
      arr.pop();
    } else if (s[i] === ")" && arr[arr.length - 1] === "(") {
      arr.pop();
    } else if (s[i] === "]" && arr[arr.length - 1] === "[") {
      arr.pop();
    } else {
      result = false;
      return result;
    }
    i++;
  }
  result = true;
  return result;
};
let str = "(())";
console.log(isBalance(str))

