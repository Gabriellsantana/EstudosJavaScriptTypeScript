//operadores comparação
/* 
> maior que 
< menor que
 == igual
 === igual tipo da variavel
 !== diferente que
*/

const num1 = 10
const num2 = 10
const num3 = '20'
const num4 = 20
const nome = 'gabriel'

console.log( num1 > num2); //false 10 não é maior que 10
console.log( num1 == num2); // true 10 é igual a 10
console.log(num4 < num1); // false 20 não é menor que 10
console.log(num3 == num4) //true não esta verificando tipo só a semelhança 
console.log(num3 === num4) // false verificando tipo também da variavel string não é igual a number
console.log(num3 > num1) //true 
console.log( nome > num1) //flase (n da pra comparar) mais retornou valor bolean 'false'
console.log( nome < num1)// flase (n da pra comparar)
console.log( nome !== num1) //true

