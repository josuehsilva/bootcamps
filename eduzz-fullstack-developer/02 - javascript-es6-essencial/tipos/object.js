let user = {
	name: 'Josue'
};

//Altera a propriedade de um objeto
console.log(user);
user.name = 'Outro Nome 1';
console.log(user);
user['name'] = 'Outro nome 2';
console.log(user);


const prop = 'name';
user[prop] = 'Outro nome 3';
console.log(user);

//Cria uma propriedade
user.lastName = 'Henrique da Silva';
console.log(user);

//Deleta uma propriedade
delete user.name;
console.log(user);
