// REGRAS:
// Não podemos criar constantes com palvras reseverdas
// Constantes precisam ter nomes significativos
// não podemos começa um nome de uma constante com numero
// Não podem conter espaços ou traços
// Utilizamos camelcase
// Case-sensitive
// Não podemos modificar um valor de uma constante
//Porquê usar const? const: Quando usamos const , estamos criando uma "caixa" onde podemos guardar alguma informação que não vai mudar. É como dar um nome a algo que não vai trocar, como o seu nome. Por exemplo, se eu digo const nome = "Alan" , sempre que eu usar nome no código, é o mesmo que eu estar colocando "Alan"

//A declaração const cria uma variável cujo o valor é fixo, ou seja, uma constante somente leitura. Isso não significa que o valor é imutável, apenas que a variável constante não pode ser alterada ou retribuída.

const nome = "Gabriel"
const cpf = "123.456.987-23"//String
const sexo = "Masculino"
const n1 = 5
const n2 = 6
const n3 = 7
const soma = n1+n2;
const resultado = soma+n3;
let valorFinal = resultado*n1;


console.log(`Meu nome é ${nome}`)
console.log(`Cpf: ${cpf}`)
console.log(`Gênero: ${sexo}`)
console.log(` ${n1} + ${n2} = ${soma}`)
console.log(` ${soma} + ${soma} = ${resultado}`)
console.log(`${valorFinal}`)
console.log(cpf ,typeof(cpf))
console.log(resultado, typeof resultado)
