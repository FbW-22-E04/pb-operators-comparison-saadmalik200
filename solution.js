const apples = 20;
const oranges = 30;
console.log("Apples quantity:", apples);
console.log("Oranges quantity:", oranges);
console.log("Apples equal to oranges:", apples === oranges);
console.log("Apples not equal to oranges:", apples !== oranges);
console.log("Apples greater than oranges:", apples > oranges);
console.log("Apples less than or equal to oranges:", apples <= oranges);
console.log("Oranges greater than apples:", oranges > apples);

const mangoes = 5;
console.log(
  "the result is greater than mangoes added to oranges:",
  mangoes * apples > mangoes + oranges
);
console.log(
  "the result is less than oranges divided by mangoes:",
  apples - mangoes < oranges / mangoes
);

console.log(mangoes === oranges && oranges === apples);

console.log(apples % mangoes === oranges % mangoes);

console.log(mangoes + apples > oranges - mangoes);
console.log("The operator to make it", mangoes + apples === oranges - mangoes);
