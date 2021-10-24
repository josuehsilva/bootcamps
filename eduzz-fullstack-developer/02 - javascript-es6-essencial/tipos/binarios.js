// in
something in somethingItems

// arrays
var arvores = new Array("pau-brasil", "loureiro", "cedro", "carvalho", "sicômoro");
0 in arvores; //true
3 in arvores; //true
6 in arvores; //true
"cedro" in arvores; //False (Deve especificar o número do indice e não o valor)
"length" in arvores; //true (propriedade do array)

//Objetos predefinidos
"PI" in Math; //true
var minhaString = new String("coral");
"length" in minhaString; //true

//Objetos personalizados
var meucarro = {marca: "Honda", modelo: "Accord", ano: 1998};
"marca" in meucarro; //true
"modelo" in meucarro; //true

//instanceof
objeto instanceof tipoObjeto

var dia = new Date(2018, 12, 17);

if (dia instanceof Date) {
	//Code
}
