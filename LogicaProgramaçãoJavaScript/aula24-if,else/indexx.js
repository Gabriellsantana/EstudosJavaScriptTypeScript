const nota = 4.9

if (nota >= 7 ) {
  console.log(`Sua nota é ${nota} e você esta APROVADOR`)
} else if (nota < 7 && nota >= 5  ) {
    console.log(`Sua nota  é ${nota} e você está na RECUPERAÇÃO`)
}else{
    console.log(`${nota} REPROVADO :( `)
}