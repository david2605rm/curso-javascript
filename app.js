
/*Queria que con el for siguira sumandole un 1 despues de hacer la multiplicacion, 
me gustaria hacerlo mas complejo como por ejemplo que multiplicara por un numero aleatorio pero no se 
como, hice lo que senti que estaba en mi conocimiento, ademas queria que cada que diera un numero diferente, 
pudiera dar la opcion de escribir el codigo de terminado que es el "123" en el ejercicio */

let entrada = prompt("ingresa tu nombre para registrarte")

let saludo = (`Usuario Registrado, Hola` + " " + entrada)
alert(saludo)

let codigo = Number(prompt("ingrese 2 numeros y genere su codigo serial(para cancelar operacion digite 123)"))

for (let i = 1; i <= 20; i++) {
    while (codigo != "123" && codigo != "123" ) {     
    let resultado = codigo  * 258 + i;  
    alert(`Tu codigo es` + " " + resultado);
    break;
    }   
}
