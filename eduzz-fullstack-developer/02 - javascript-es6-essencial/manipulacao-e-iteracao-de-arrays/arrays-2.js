const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//Foreach
numbers.forEach((value, index) => {
	console.log(`${index} - ${value}`);
});

//Map
const numbersMap = numbers.map(value => value * 2);
console.log(numbersMap);
console.log(numbers);

//Flat
const numbersFlat = [1, 2, 3, 4, 5, 6, [7, 8, 9, 10]];
const numbersRes = numbersFlat.flat(1);
console.log(numbersFlat);
console.log(numbersRes);

//Flatmap
const numbersFlatMap = numbers.flatMap(value => [value * 2]);
console.log(numbersFlatMap);
const numbersFlatMap2 = numbers.flatMap(value => [[value * 2]]);
console.log(numbersFlatMap2);


//Keys
const numbersIterators = numbers.keys();

console.log(numbersIterators.next()); //{value: 1, done: false}
console.log(numbersIterators.next()); //{value: 2, done: false}
console.log(numbersIterators.next()); //{value: 3, done: false}
console.log(numbersIterators.next()); //{value: 4, done: false}
console.log(numbersIterators.next()); //{value: 5, done: false}
console.log(numbersIterators.next()); //{value: 6, done: false}
console.log(numbersIterators.next()); //{value: 7, done: false}
console.log(numbersIterators.next()); //{value: 8, done: false}
console.log(numbersIterators.next()); //{value: 9, done: false}
console.log(numbersIterators.next()); //{value: 10, done: false}
console.log(numbersIterators.next()); //{value: undefined, done: true}

//Values
const numbersIterator= numbers.values();

console.log(numbersIterator.next()); //{value: 1, done: false}
console.log(numbersIterator.next()); //{value: 2, done: false}
console.log(numbersIterator.next()); //{value: 3, done: false}
console.log(numbersIterator.next()); //{value: 4, done: false}
console.log(numbersIterator.next()); //{value: 5, done: false}
console.log(numbersIterator.next()); //{value: 6, done: false}
console.log(numbersIterator.next()); //{value: 7, done: false}
console.log(numbersIterator.next()); //{value: 8, done: false}
console.log(numbersIterator.next()); //{value: 9, done: false}
console.log(numbersIterator.next()); //{value: 10, done: false}
console.log(numbersIterator.next()); //{value: undefined, done: true}


//Find - Retorna o primeiro elemento que satisfaz a condição
const find = numbers.find(value => value > 5);
console.log(find);

//FindIndex - Retorna o index do primeiro elemento que satisfaz a condição
const findIndex = numbers.findIndex(value => value > 5);
console.log(findIndex);

//Filter - Retorna um novo array com os elementos que satisfazem a condição
const filter = numbers.filter(value => value > 5);
console.log(filter);

//IndexOf - Retorna o index do primeiro elemento que satisfaz a condição
const indexOf = numbers.indexOf(5);
console.log(indexOf);

//lastIndexOf - Retorna o index do ultimo elemento que satisfaz a condição
const lastIndexOf = numbers.lastIndexOf(5);
console.log(lastIndexOf);

//includes - Retorna true se o elemento existir no array
const includes = numbers.includes(5);
console.log(includes);
const includes2 = numbers.includes(11);
console.log(includes2);

//some - Retorna true se algum elemento satisfaz a condição
const some = numbers.some(value => value % 2 === 0);
console.log(some);

//Every - Retorna true se todos os elementos satisfazem a condição
const every = numbers.every(value => value % 2 === 0);
console.log(every);

//Sort - Ordena o array
const sort = numbers.sort((current, next) => next - current);
console.log(sort);

//Reverse - Inverte o sentido do array
const reverse = numbers.reverse();
console.log(reverse);

//Join - Retorna uma string com os elementos do array separados por um delimitador
const join = numbers.join('-');
console.log(join);

//Reduce - Retorna um valor com base no array
const reduce = numbers.reduce((total, current) => total += current, 0);
console.log(reduce);
