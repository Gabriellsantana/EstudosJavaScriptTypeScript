// aritimeticos
// + adição 
// * multiplicação 
// / divisão
// - subtração
// % resto da divisão
// ordem  (); ** ;  * ; / ; % ; + ; -
// incremento = ++
// decremento = --

let a = 10;
let b = 20;

console.log(`Soma: ${a} + ${b} = ${a+b}`);
console.log(`Multiplicação: ${a} x ${b} = ${a*b}`);
console.log(`Divisão: ${a} / ${b} = ${a/b}`);
console.log(`Subtração: ${a} - ${b} = ${a-b}`);
console.log(`Resto da divisão: ${a} % ${b} = ${a%b}`);
console.log(`Resto da divisão: ${a} % ${b} = ${a**b}`);

// incremento = ++
// decremento = --
console.log(++a)//11
console.log(++a)//12
console.log(--a)//11
console.log(--a)//10

var contador = 45
var passo = 2
contador +=passo // contador = contador + passo
console.log(`CONTADOR`,contador)

// parseInt (converte o numero para inteiro) parseFloat (converte o numero que era uma string para Real)
//number (o proprio js indetifica o tipo do dados)
const num1 = 10;
const num2 = parseInt("50");
const num3 = parseFloat("35");
const num4 = Number("45.98");
console.log(typeof(num1))
console.log(typeof(num2))
console.log(typeof(num3))
console.log(typeof(num4))
