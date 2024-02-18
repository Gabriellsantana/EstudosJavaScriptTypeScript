function NomeDaFuncao (nome = 'Gabriel') {

    console.log(`Ola ${nome}`)
    if (nome == 'Gabriel') {
        console.log(`Seja Bem Vindo a esse incrivel World da Programação`)
    }
}
NomeDaFuncao(); //chamndo a função
function primeirafuncao (){
     let num1 = 9
     console.log(`TABUATA DE 10 D0 NUMERO ${num1}`)
     console.log(`${num1} x 1 = ${num1*1}`)
     console.log(`${num1} x 2 = ${num1*2}`)
     console.log(`${num1} x 3 = ${num1*3}`)
     console.log(`${num1} x 4 = ${num1*4}`)
     console.log(`${num1} x 5 = ${num1*5}`)
     console.log(`${num1} x 6 = ${num1*6}`)
     console.log(`${num1} x 7 = ${num1*7}`)
     console.log(`${num1} x 8 = ${num1*8}`)
     console.log(`${num1} x 9 = ${num1*9}`)
     console.log(`${num1} x 10 = ${num1*10}`)
    
}
primeirafuncao();

function parametro(nomee) {
    console.log(`você adicionou o nome ${nomee} no momento que foi chamada a function e reutilizou`)
 }

parametro('Maria'); //é possivel reultilzar o parametro da função varias vezes 
parametro('João');
parametro('Carlos');

// retorna função em uma varaivel

function varaivel (num2){
    return 12332 // a function passa a valer apenas o return
}
const var1 = varaivel('hhh') 
console.log(var1)

