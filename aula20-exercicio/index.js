function escopo(){ 

let result = document.querySelector('.resultado')
let form =  document.querySelector('.formulario')
const pessoas = []; 


    function recebe (evento) {
      evento.preventDefault()
     let result = document.querySelector('.resultado')
     const nome = form.querySelector('.nome')
     const sobrenome = form.querySelector('.sobrenome')
     const idade = form.querySelector('.idade')
     const altura = document.querySelector('.altura')
     const peso = document.querySelector('.peso')

     pessoas.push({
         nome:nome.value,
         sobrenome:sobrenome.value,
         idade:idade.value,
         altura:altura.value,
         peso:peso.value,
     });

     console.log(pessoas)

     result.innerHTML += `<p>${nome.value} ${sobrenome.value} idade:${idade.value} Altura:${altura.value} Peso: ${peso.value}</p>`

  };
  form.addEventListener('submit', recebe);

};
escopo();

/*  
    form.onsubmit = function (evento) {
     evento.preventDefault();
     console.log('ok')
  };
*/