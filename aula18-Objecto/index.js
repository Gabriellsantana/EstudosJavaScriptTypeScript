//array []
// objeto {}

const array = [ 1 ,2 ,'gabriel',3.6]
array.push(6)
array[1] = 'novoValor'

const pessoa1 ={
    nome:'Gabriel',
    idade : 20,
    sexo:'masculino'
};

//finção  facilitar//////////////////////////////////
function pessoa2(nome,sexo,idade) {
   return{
       nome:nome,
       sexo:sexo,
       idade //pode deixar assim tmb sem repetir
   }
}

const criapessoa1= pessoa2('Gabril','masculino',200)
const criapessoa2 = pessoa2('Douglas','masculino',300)
const criapessoa3 = pessoa2('Erica','feminino',400)
const criapessoa4 = pessoa2('Lucidalva','femenino',500)
const criapessoa5 = pessoa2('Gustavo','não-indetificou',600)

////////////////////////////////////////////////////////////////////
console.log(criapessoa1)
console.log(criapessoa2)
console.log(criapessoa3)
console.log(criapessoa4)
console.log(criapessoa5)
console.log(array)
console.log(pessoa1)
console.log(pessoa1.nome,pessoa1.sexo)


const metotdo = {
    nome:'Maria',

  fala ()  {
    console.log('ola mundo')
  }
};