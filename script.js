const strings = ['caneta', 'regua','isqueiro']

const numeros = [2, 13 , -78]

const arrayMisto = ['bloquinho de notas', 4, true]

const numeroUnico = [1]

const arrayVazio = []

console.log(strings.length)
console.log('acessando item indice 3',strings[3] )
console.log('acessando item indice 2',strings[2] )

console.log(arrayMisto.includes(4));
console.log(arrayMisto.includes(13));

console.log(numeroUnico[0]);
console.log(numeroUnico.length);

//PARTE 3 
const copiaStrings = strings.slice()
console.log(strings);

copiaStrings.push('agenda')
console.log(strings);
console.log(copiaStrings);

copiaStrings.splice(2,2)
console.log(copiaStrings);
// ordenando
console.log(strings);
strings.sort()
console.log(strings);

//ordenando numeros
console.log(numeros);
numeros.sort()
console.log(numeros);


const numerosBagunçados = [1,200,2,100,300,3]
console.log(numerosBagunçados);
console.log(numerosBagunçados.sort());



