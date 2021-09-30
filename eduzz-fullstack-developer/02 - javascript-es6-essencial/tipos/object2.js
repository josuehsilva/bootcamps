const user = {
	name: 'Josue',
	lastName: 'Henrique da Silva'
}

//Recupera as chaves do objeto
console.log('Propriedades do objeto user', Object.keys(user));

//Recupera os valores das chaves dos objetos
console.log('\nValores das propriedades do objeto user:', Object.values(user));

//Retorna um array de arrays contendo [nome_prop, valor_prop]
console.log('\nLista de propriedades e valores:', Object.entries(user));

//Mergear propriedades de objetos
Object.assign(user, {fullName: 'Josué Henrique da Silva'});

console.log('\nAdiciona a propriedade fullName no objeto user', user);
console.log('\nRetorna um novo objeto mergeando dois ou mais objetos', Object.assign({}, user, {age:26}));

//Previne todas as alterações em um objeto
const newObj = {foo: 'bar'};
Object.freeze(newObj);
console.log(newObj);

newObj.foo = 'changes';
console.log(newObj);
delete newObj.foo;
console.log(newObj);
