//*? Напишіть функцію updateObject, яка приймає об'єкт та повертає
/*? новий об'єкт без вказаного параметра
 *? Очікуваний результат updateObject({a: 1, b: 2, c: 3}, 'b') => {a: 1}
 */

const obj = { a: 1, b: 2, c: 3 };

const updateObject = (obj, keyName) => {
  const copyObj = { ...obj };
  delete copyObj[keyName];
  return copyObj;
};
updateObject(obj, "a");
console.log(obj);
console.log(updateObject(obj, "a"));
