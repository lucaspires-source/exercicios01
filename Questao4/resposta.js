/*/DESAFIO FIZZBUZZ
Escreva um programa que imprima cada número de 1 a 100 em uma nova linha.
Para cada múltiplo de 3, imprima "Fizz" em vez do número.
Para cada múltiplo de 5, imprima "Buzz" em vez do número.
Para números que são múltiplos de 3 e 5, imprima "FizzBuzz" em vez do número.
Para números não múltiplos de 3 e/ou de 5, imprima apenas o número.*/

let number = 1;

while (number <= 100) {
    if(number % 3 == 0 && number % 5 == 0){
        console.log("FizzBuzz");
    }else if(number % 5 == 0){
        console.log("Buzz");
    }else if(number % 3 == 0){
        console.log("Fizz");
    }
    else {
        console.log(number)
    }
    number++;
}