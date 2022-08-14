function encoder(s) {
  let alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  splitedString = s.split("");
  splitedString.unshift(splitedString[splitedString.length - 1]);
  splitedString.pop();

  let encoded = [];
  

  splitedString.map((item) => {
    for (let i = 0; i < alphabet.length; i++) {
      if (alphabet[i] == item) {
        let next = alphabet[i + 1];
        if (item == "z") {
          next = alphabet[0];
        }

        encoded.push(next);
      }
    }
  });

  let text = encoded.join("").toString();
  console.log(text);
  

}
let str = "mehdi";


  encoder(str);


