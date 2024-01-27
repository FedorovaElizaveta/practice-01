/**
 *? Записати масив, const arr = ['BEST', 'the', 'foo', 'is', 'JS' ]
 *? розгорнути масив,
 *? вирізати foo,
 *? перевести його в рядок розділений пробілами
 */

 const arr = ["BEST", "the", "foo", "is", "JS"];
 arr.reverse();

arr.splice(arr.indexOf("foo"),1)
console.log(arr.join(" "));