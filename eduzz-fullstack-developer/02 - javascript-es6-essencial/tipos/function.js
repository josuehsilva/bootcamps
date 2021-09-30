function fn() {
	return 'Code Here';
}

const arrowFn = () => 'Code here';
const arrowFn2 = () => {
	//Abrir bloco para mais de uma expressão
	return 'Code Here';
}

//Funções são objetos
fn.prop = 'Pode criar propriedades';

console.log(fn());
console.log(fn.prop);

//Receber parêmetros
const logValue = value => console.log(value);
const logFnResult = fnParam => console.log(fnParam());

logFnResult(fn);

//Receber e retornar funções
const controlFnExec = fnParam => allowed => {
	if (allowed) {
		fnParam();
	}
}

const handleFnExecution = controlFnExec(fn);

handleFnExecution(true); //Executará a função fn
handleFnExecution();	 //Não executará a função fn

//controlFnExec como função
function controFnExec(fnParam) {
	return function(allowed) {
		if(allowed) {
			fnParam();
		}
	}
}
