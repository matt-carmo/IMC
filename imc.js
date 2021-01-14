var peso = 55
var altura = 1.67
var imc = peso/ (altura*altura) 



console.log (imc.toFixed(2))
if (imc < 16){
    console.log ('Magreza grave',) }
else if (imc >= 16 && imc < 17){
    console.log ('Magreza MODERADA') }
else if (imc >= 17 && imc < 25){
    console.log ('saudavel') }
else if (imc >= 25 && imc < 30){
    console.log ('Sobrepeso') }
else if (imc >= 30 && imc < 35){
     console.log ('Obesidade Grau I') }
else if (imc >= 35 && imc < 40){
     console.log ('Obesidade Grau II(severa)') }
else if (imc >= 40){
     console.log ('Obesidade Grau III(mórbida)') }//puta ssadsdasd
