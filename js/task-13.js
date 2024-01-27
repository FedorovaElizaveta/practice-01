// ======================================== ЯК ПЕРЕВІРИТИ ЧИ МАСИВ ПУСТИЙ

const arr = [1,2,3,4,5];

const isArrayEmpty = !arr.length ? true : false;

console.log(isArrayEmpty);

// ======================================= ЯК ПЕРЕВІРИТИ ЧИ ОБЄКТ ПУСТИЙ

const user = {
    name: "Oleg",
    age: 16
}

const objArr = Object.keys(user);

console.log(!objArr.length ? true : false);





