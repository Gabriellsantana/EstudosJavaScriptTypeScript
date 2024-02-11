//Objeto Math//
//Math. tem varias propriedades para se aplicar a um numero RAIZ QUADRADA ETC

let num1 = 9.8567
let num2 = Math.floor(num1)//arredondando para baixo <--//
let num22 = Math.ceil(num1) //arredonda para cima --> //
let num222 = Math.round(num1);// arredonda pra cima ou pra baixo// 
console.log("----------ARREDODANDO-----------") 
console.log(num2)
console.log(num22)
console.log(num222)




console.log("-------NUMEROS MAIORES E MENORES-----------")
console.log(Math.max(1,2,-4,5,54,6,7,12,9))//encontra maior numero dos numeros informado
console.log(Math.min(1,2,-4,5,0.3,6,7,12,9))//encontra menor numero dos numeros informado





let aleatorio2 = Math.random() * (10-5) + 5; //vai gerar numero aleatorio entre 10 e 5 na primeira casa de cimal apenas 
let aleatorio3 = Math.round (Math.random() * (10-5) + 5); //fixa apenas uma casa deciaml 
let aleatorio1 = Math.random();
console.log("----------NUMEROS ALEATORIO------------")
console.log(aleatorio3)
console.log(aleatorio2)
console.log(aleatorio2.toFixed(0))//para mostra apena um casa decimal que é o primeiro numero
console.log(aleatorio1)
console.log(Math.random());//vai gerar um numero aleatorio cada vez que execulatar com casas decimas , mais não incluir o 1


