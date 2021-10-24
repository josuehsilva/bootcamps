class Animal {
	constructor(qtdePatas) {
		this.qdePatas = 4;
	}
}

class Cachorro extends Animal {
	constructor(morde) {
		super(4);
		this.morde = 4;
	}
}

const pug = new Cachorro(false);
console.log(pug);


class Person {
	constructor(name) {
		this.name = name;
	}
}

class PessoaF extends Person {
	constructor(name, cpf) {
		super(name);
		this.cpf = cpf;
	}
}

const p = new PessoaF('Josué', 12345678901);
console.log(p);



// Modificadores de acesso
class Pessoa {
	#name = '';

	constructor(initialName) {
		this.#name = initialName;
	}

	setName(name) {
		this.#name = name;
	}

	getName() {
		return this.#name;
	}

	static walk() {
		console.log('walking...');
	}
}
const p2 = new Pessoa('Josué');
console.log(p2);

console.log(p2.getName());

console.log(p2.name);

p2.setName('Mateus');
console.log(p2.getName());

//Static (Acessa métodos e atributos sem instanciar)
console.log(Pessoa.walk());
