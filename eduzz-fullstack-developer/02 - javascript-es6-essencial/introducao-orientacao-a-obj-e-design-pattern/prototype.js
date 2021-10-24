/* Herança
- Baseada em protótipos
- prototype
- __proto__
- constructor
*/
const myText = "Hello prototype!";

console.log(myText.split);
console.log(myText.__proto__.split);
console.log(myText.__proto__.split === String.prototype.split); //true
console.log(myText.constructor === String); //true


function AnimalUm() {}

console.log(AnimalUm.constructor);
//Animal.constructor > Function > Function.prototype.constructor > Object() {} > Object.prototype == null

/*
new Foo(...);

O que ocorre?

1 - Um novo objeto é criado, herdando Foo.prototype
2 - A função construtora Foo é chamada com os argumentos especificados e com o 'this' vinculado ao novo objeto criado.
3 - Caso a função construtora tenha um retorno explicito, será respeitado o seu 'return'. Senão, será retornado o objeto criado no item 1.
*/

//Sem return
function Pessoa(name) {
	this.name = name;
}
const p = new Pessoa('Josué');
console.log(p);

//Com return
function PessoaDois(name) {
	this.name = name;

	return {
		name: 'Teste'
	};
}
const p2 = new PessoaDois('Josué');
console.log(p2);



function Animal() {}

Animal.prototype.qtdePatas = 0;
Animal.prototype.movimentar = function () {}

function Cachorro(morde) {
	this.qdePatas = 4;
	this.morde = morde;
}

Cachorro.prototype = Object.create(Animal);
Cachorro.prototype.latir = function () {
	console.log('Au! Au!');
}

const pug = new Cachorro(false);
const pitbull = new Cachorro(true);
