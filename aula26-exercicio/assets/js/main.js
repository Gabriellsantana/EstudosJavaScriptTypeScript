//parando envio do formulario
let form =  document.getElementById("formulario")//selecionei pelo id
form.onsubmit = function (evento) { //onSubimit é o evento q esta dentro do formulario type "subinit" na vdd ele esta no meu buttom la no html
    evento.preventDefault();
 };

function compilar(){

    const peso = Number(document.getElementById("peso").value)
    const altura = Number(document.getElementById("altura").value)
    let imc = peso /(altura*altura)
    let resultado =  document.getElementById('result') 
    if(!peso  && !altura  ){
       
        resultado.style.backgroundColor = "blue"
        resultado.innerText = `Nehuma Informação Digitada`
          
    } else if ( peso === 0 || !peso){
        resultado.style.backgroundColor = "red"
        resultado.innerText = `Peso  Invalido `

    } else if (altura === 0  || !altura ){
        resultado.style.backgroundColor = "red"
        resultado.innerText = `Altura  Invalido `

    } else if(imc <= 18.5){
        resultado.style.backgroundColor ="orange"
        resultado.innerHTML = `IMC: ${imc.toFixed(2)} Abaixo do peso `

    } else if (imc > 18.5  && imc <= 24.9) {
        resultado.style.backgroundColor = "green"
         resultado.innerText = `IMC: ${imc.toFixed(2)} Peso Normal`
         
         
    } else if (imc > 24.9 && imc <= 29.9) {
        resultado.style.color = "white"
        resultado.style.backgroundColor ="red"
        resultado.innerText = `IMC: ${imc.toFixed(2)} Sobrepeso`

    } else if (imc > 29.9) {
        resultado.style.color = "red"
        resultado.style.backgroundColor ="black"
        resultado.innerText = `IMC: ${imc.toFixed(2)} Obesidade`
       
    }

}

/*Abaixo do peso: IMC menor que 18.5
Peso normal: IMC entre 18.5 e 24.9
Sobrepeso: IMC entre 25 e 29.9
Obesidade: IMC 30 ou maior */