const name: string = "Александр";

const text: string = `Я, ${name}, учу TYPESCRIPT`;

//Написать программу, которая выводит text в нижнем регистре с вашим именем, если имя не совпадает, то заменить его

const yourName: string = "Настя";
if (text.includes(yourName)) {
  console.log(text.toLowerCase());
} else {
  const firstNameIndex = text.indexOf(name);
  const newText: string = text
    .slice(0, firstNameIndex)
    .concat(yourName)
    .concat(text.slice(firstNameIndex + name.length));
  console.log(newText);
}
