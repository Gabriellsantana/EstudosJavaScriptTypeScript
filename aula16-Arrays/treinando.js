//add
const lista1 = [1,2,4,5,6,7,8]
lista1.push("Gabriel")
lista1[0] = 'douglas'
console.log(lista1)
console.log(typeof(lista1[0]))

//delete
const lista2 = ['priemiro-Erika','Lucia','Edvaldo','Gabriel','Crysthian','Henrry-ultimo']
delete lista2[2]
const  Ultimonomeremovido = lista2.pop()
const  Primeironomeremovido = lista2.shift()



console.log(lista2)
console.log(typeof(lista2[2]))
console.log(Ultimonomeremovido)
console.log(Primeironomeremovido)