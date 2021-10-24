const persons = Array.of('Josué', 'Maria', 'João');
console.log(persons);

const numberAsString = Array.of(1, 2, 'string', 'texto');
console.log(numberAsString);

const arrayWith3Positions = Array(3); //[Empty, Empty, Empty]

const arr = Array(2, 3); //[2, 3]

//Array.from - cria uma nova instância de array a partir de um parâmetro
//array-like ou iterable object
const divs = document.querySelectorAll('div'); //NodeList
const arrDivs = Array.from(divs); //Array


//Inserir e remover elementos do array

const frutas = ['Banana', 'Maçã', 'Uva'];
console.log(frutas);
const frutasLenght = frutas.push('Laranja'); //Insere no final do array - Retorna o tamanho
console.log(frutas);
console.log(frutasLenght);

const removedItem = frutas.pop(); //Remove o último elemento do array - retorna o elemento removido
console.log(frutas);
console.log(removedItem);

const arrUnshift = frutas.unshift('Abacaxi'); //Insere no início do array - Retorna o tamanho
console.log(frutas);
console.log(arrUnshift);

const removedShift = frutas.shift(); //Remove o primeiro elemento do array - retorna o elemento removido
console.log(frutas);
console.log(removedShift);

const salgados = ['Risole', 'Empada', 'Coxinha'];
const frutasSalgados = frutas.concat(salgados); //Concatena dois arrays
console.log(frutasSalgados);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(numbers.slice(0, 2)); //Retorna um novo array com os elementos entre o índice 0 e 2

console.log(numbers.slice(2, 4)); //Retorna um novo array com os elementos entre o índice 2 e 4

console.log(numbers.slice(2)); //Retorna um novo array com os elementos entre o índice 2 e o final

console.log(numbers.splice(2));
console.log(numbers);
numbers.splice(0, 0, 'a', 'b', 'c');
console.log(numbers);
