/*
Design Pattern são soluções generalistas para problemas recorrentes
durante o desenvolvimento de um software. É uma definição de alto nível
de como um problema comum pode ser resolvido.


Formato de um pattern (do livro A Pattern Language)
-Nome
-Exemplo de utilização
-Contexto que pode ser aplicado
-Problema que resolve
-Solução para resolver o problema

Design Patterns: Elements of Reusable Object-Oriented Software (livro)

Tipos definidos no livro:
-Criação
-Estruturais
-Comportamentais

-Padrões de Criação
*Abstract Factory
*Builder
*Factory Method
*Prototype
*Singleton

-Padrões Estruturais
*Adapter
*Bridge
*Composite
*Decorator
*Facade
*Business Delegate
*Flyweight
*Proxy

-Padrões Comportamentais
*Chain of Responsibility
*Command
*Interpreter
*Iterator
*Mediator
*Observer
*State
*Strategy
*Template Method
*Visitor


Patterns Mais Utilizados no Javascript
*Factory
*Singleton
*Decorator
*Observer
*Module
*/

//Factory - Todas as funções que retornam um objeto, sem a necessidade de
//chamá-las com o new, são consideradas funções Factory(fábrica).

function FakeUser() {
	this.name = 'Josué';
	this.lastname = 'Henrique';
}
//Não é Factory
const user = new FakeUser();
//-----------//
function FakeUser2() {
	return {
		name: 'Josué',
		lastName: 'Henrique'
	}
}
//Factory
const user = FakeUser2();


//Singleton - O objetivo desse pattern é criar uma única instância de uma função
//construtora e retorná-la toda vez em que for necessário utilizá-la. Ex: Jquery

function MyApp() {
	if (!MyApp.instance) {
		MyApp.instance = this;
	}

	return MyApp.instance;
}

const app = MyApp.call({nome: 'Custom App'});
console.log(app);
const app2 = MyApp.call({nome: 'new App'});
console.log(app2);


//Decorator - Recebe outra função como parâmetro e estende o seu comportamento
//sem modificá-la explicitamente.

let loggedIn = false;

function callIfAuthenticated(fn){
	return !!loggedIn && fn();
}

function sum(a, b) {
	return a + b;
}

console.log(callIfAuthenticated(() => sum(1, 2)));
loggedIn = true;
console.log(callIfAuthenticated(() => sum(2,3)));
loggedIn = false;
console.log(callIfAuthenticated(() => sum(5,3)));


//Observer - Muito popular em aplicações javascript. A instância (subscriber)
//mantém uma coleção de objetos (observers) que são notificados quando ocorre
//mudança no estado.

class Observable {
	constructor() {
		this.observables = [];
	}

	subscribe(fn) {
		this.observables.push(fn);
	}

	notify(data) {
		this.observables.forEach(fn => fn(data));
	}

	unsubscribe(fn) {
		this.observables = this.observables.filter(obs => obs !== fn);
	}
}

const o = new Observable();

const logData1 = data => console.log(`Subscribe 1: ${data}`);
const logData2 = data => console.log(`Subscribe 2: ${data}`);
const logData3 = data => console.log(`Subscribe 3: ${data}`);

o.subscribe(logData1);
o.subscribe(logData2);
o.subscribe(logData3);

o.notify('notified 1');

o.unsubscribe(logData2);

o.notify('notified 2');


//Module - É um pattern que possibilita organizar melhor o código, sem a
//necessidade de expor variáveis globais.

let name = 'default';

function getName() {
	return name;
}

function setName (newName) {
	name = newName;
}

module.exports = {
	getName,
	setName
}
