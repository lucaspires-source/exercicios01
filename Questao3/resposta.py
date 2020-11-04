#Escreva um programa que dado um array, some todos os seus elementos e imprima da tela.
arr = [2, 18, 98, 18, 96, 97, 71, 34, 11, 4, 4, 36, 21, 17 , 5, 44, 30, 12, 93, 2, 15, 6, 90, 29, 48]
sum = 0

for i in range(0, len(arr)):  
   sum = sum + arr[i];

print("a soma dos elementos nesse array é : " + str(sum))