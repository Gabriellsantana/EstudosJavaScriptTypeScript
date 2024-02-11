let num1 = 1;
let num2 = 2.5;
let num3 = 10;
let num4 = 19.98765476;
num3 = num3.toString(); // alterando valor da variavel

console.log(Number.isInteger(num4))//essa função retorna true ou false fazendo verificação se numero é inteiro 
console.log(num4.toFixed(1))//aredodando numero e dentro do parente selecionado o numero de casas (toFixed(2))
console.log(typeof(num3));
console.log(num1+num2);
console.log(num1.toString()+num2);// num1 so esta retornado em string .toString()


let a = num1 + "5";//só o + cocatena e considera o "5" como string os outro operadores executar o "5" como um number
let b = num1 - "5";
let c = num1 * "5";
let d = num1 / "5";
console.log(a, b, c, d);

let soma = 5
soma += num2 // soma = soma + num2
console.log(soma)

let num5 = 0.1
let num6 = 0.1

num5 += num6 //0.2
num5 += num6 //0.3
num5 += num6 //0.4
num5 += num6 //0.5
num5 += num6 //0.6
num5 += num6 //0.7
num5 += num6 //0.8
num5 += num6 //0.9
num5 += num6 //1.0
num5 += num6 //1.1


console.log(num5) //numero binario para maquina o numero esta com esse valor
console.log(num5.toFixed(1)) // aqui eu dei um burlada no sistema de forma visual mais o valor para maquina é o de cima 