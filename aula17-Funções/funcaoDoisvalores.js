function funcao1 (y, x){
  const resultado = y + x
  return resultado //fim da fuction oque estiva baixo não ser execultado

  console.log(`não sera execultado`)
}

console.log(funcao1(5,5))
console.log(funcao1(10,5))
console.log(funcao1(20,10))

//variavel recebendo function precisa termina cm ponto e virgula 

const raiz = function (n){ //função anonima
   return n * 5;
};
const num1 = function a (){

};

console.log(raiz(4));//4 valor de 'n'


