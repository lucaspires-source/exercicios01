// Faça um programa que imprima os primeiros 25 números da sequencia de fibonacci.


const listarFibonacci = (n) => {
    for (var fibonacci = [0, 1], i = 1; i < n; i++) 
      fibonacci.push(fibonacci[i] + fibonacci[i - 1])
  
    return fibonacci
  }
  
  console.log(  listarFibonacci(25)  )