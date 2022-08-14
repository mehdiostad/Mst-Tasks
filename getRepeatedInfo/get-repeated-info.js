function getRepeatedInfo(number) {
  let myArr = number.split("");

  let newArr = [];

  myArr.forEach((item) => {
    for (let i = 0; i < item; i++) {
      newArr.push(item);
    }
    newArr.push(" ");
  });
  let text = newArr.join("");
  console.log(text);
}
let num = "234";
getRepeatedInfo(num);
