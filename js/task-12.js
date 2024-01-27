//Напишіть функцію makeInvetedString(), яка замінює регістр кожного символу
//У сторіччі на протилежний
//Наприклад 'JavaScript' повинен повернути 'jAVAsCRIPT'

function makeInvertedString(word) {
  const splitWord = word.split("");
  let emptyString = " ";
  for (let i = 0; i < splitWord.length; i += 1) {
    if (splitWord[i] === splitWord[i].toUpperCase()) {
      emptyString += splitWord[i].toLowerCase();
    } else {
      emptyString += splitWord[i].toUpperCase();
    }
  }
  return emptyString;
}
console.log(makeInvertedString("JavaScript"));
