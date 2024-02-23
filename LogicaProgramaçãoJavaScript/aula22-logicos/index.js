/*
operadores logicos

&&  = E
||  = ou    
!   = não   negação

*/ 

let nome = 'gabriel';
let num1 =10;

console.log( num1 == 10  && nome == 'gabriel' )
console.log( num1 == 10  || nome == 'sol' )

console.log(true && true && true && false)
console.log(true && true && true && false)
console.log(true && true && true && true)

console.log(true || true || false)
console.log(false || false || false ||  false)
console.log(false || false || false ||  true)

//negação inverte os valores

console.log('negação:',!false) // true : to negando o falso e algo não falso e então verdadeiro
console.log('negação',!true) // false
console.log('negação',!!!!true) // poder negar quantas vezes quiser segue o fio :  valor é true (1! negação false) (2! negação true) (3! negação false) (4! negação true) então valor final é true

