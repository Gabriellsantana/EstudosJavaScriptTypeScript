let idnumero = window.document.getElementById('numero')
let num1 = Number(prompt("Informe um Número?"))
  
  idnumero.innerHTML = num1
  document.body.innerHTML += `${num1} é Number Inteiro : ${Number.isInteger(num1)}<br/>`
  document.body.innerHTML += `É NaN: ${isNaN(num1)}<br/>`
  document.body.innerHTML += `A raiz quadrada é ${num1 ** 0.5 } <br>`
  document.body.innerHTML +=`Arredondado para cima ${Math.ceil(num1)} <br/>`
  document.body.innerHTML +=`Arredoando para baixo ${Math.floor(num1)} <br/>`
  document.body.innerHTML += `Com Duas casas Decimais ${num1.toFixed(2)} <br/>`