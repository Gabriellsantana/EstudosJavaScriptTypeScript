/*
Para obter a hora atual em JavaScript, você pode usar o objeto Date. Aqui está um exemplo simples de como você pode fazer isso:

Este código criará um objeto Date, que representa a data e a hora atuais, e então você pode usar os métodos getHours(), getMinutes() e getSeconds() para obter a hora atual, os minutos e os segundos
*/

let dataAtual = new Date();
let hora = dataAtual.getHours();
let minutos = dataAtual.getMinutes();

let horaAtual = hora +':'+minutos;

if(hora >=6 && hora <= 11.59){
    console.log(horaAtual,' Bom dio')
} else if (hora >=12  && hora <= 17.59){
    console.log(horaAtual,'Boa tarde')
} else{
    console.log(horaAtual,'Boa noite')
};

