// Escreva um programa que, dado um array, gere um novo array com todos os múltiplos de 3 do array inicial


let arrayInicial = [17, 6, 6, 8, 4, 79, 5, 30, 4, 3, 2, 1, 1, 7, 10, 3, 42, 2, 2, 9, 90, 4 ]
for(let i = 0; i < arrayInicial.length; i++) {
    if(arrayInicial[i] % 3 === 0){
       console.log(arrayInicial[i] + " é um múltiplo de 3" )
    }
  
}

