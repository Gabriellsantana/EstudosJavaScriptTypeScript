const nome = prompt("Digite seu nome?")


document.body.innerHTML = `Ola <h2> ${nome} <h2/>`
document.body.innerHTML +=`Seu nome tem <b> ${nome.length} <b/> letras <br />`;
document.body.innerHTML +=`A segunda letra do seu nome é <b>${nome[1]} <b/> <br />`;
document.body.innerHTML +=`Qual o primeiro indice da letra Letra no seu nome ${0}`
document.body.innerHTML +=` Qual primeiro indice da letra a no seu nome <b>${nome.indexOf("a")}<b/> <br/>`// quando ele encontra a primeira letra a ele vai exbir o indice dele que no caso é a posição numeral que ela esta
document.body.innerHTML +=`Qual ultimo indice da letra a no seu nome <b>${nome.lastIndexOf("a")}<b/> <br/>`
document.body.innerHTML +=`As ultimas 3 letras do seu nome são <b>${nome.slice(-3)}<b/> <br/>`
document.body.innerHTML +=`Qual a palvra do meu nome <b>${nome.split(" ")}<b/> <br/>`
document.body.innerHTML +=`Seu nome com letras maiscula <b>${nome.toLocaleUpperCase()}<b/> <br/>`
document.body.innerHTML +=`Seu nome com letras minuscula <b>${nome.toLocaleLowerCase()}<b/> <br/>`





document.body.style.color = "blue"
