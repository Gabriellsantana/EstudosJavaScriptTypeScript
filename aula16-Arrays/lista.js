//             0       1       2      3
const lista = [12, 'gabriel', 0.1,'gabriel'];


//ADICIONANDO
lista [3] = 'Matheus'// add um novo valor no indice 3 da lista
lista [4] = 71992742146 // adicionando um elemento criando um ultimo indice
lista.push('Mariana') // aqui add um elemento no final da arrays , oque facilita vc não precisar saber o tamanho da arrays
lista.unshift(1)//add elemento no incio da lista


//REMOÇÃO
lista.pop()  //remove elemento do fianl
lista.shift()// remove primeiro elemento
const removido = lista.pop()// da para salvar o elemnto removido em uma variavel
delete lista [3] // removendo elemento sem altera os indices então o indice  vai continuar oculpando espaço mais  sem um elemento  , então vai ser  um indice vazio

console.log(lista.length) // saber o tamanho da arrays
console.log(lista)
console.log(lista[3])
console.log(removido)
console.log(lista.slice(0 ,3))//exebido apenas do indice 0 até 3 , poder fazer com indice negativo ex -1 
console.log(lista.slice(0 , -3))
