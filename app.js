//#1: Escribe un programa que pregunte al usuario si es culpable o no. Asumiremos que: En caso afirmativo el usuario responderá si, en caso contrario responderá no. Si el usuario responde si se escribirá el documento «irás a la cárcel».
/*
    var rta;
    rta= prompt ("¿Eres culpable?");
    if (rta=="si" || rta=="SI" || rta== "Si"){
        console.log("Irás a la carcel")
    }
*/

//#2 Determinar si un número es par o impar.
/*
    var numero;
    numero = prompt ("Digite un numero");
    numero = Number(numero);
    if(numero%2==0){
        console.log("El numero es par");
    }else{
        console.log("El numero es impar");
    }
*/

// #3 Pedir dos números y decir si non múltiplos o no
/*
var num1,num2;

num1 = prompt ("Digite un numero");
num1= Number(num1);
num2 = prompt ("Digite el multiplo del numero");
num2= Number(num2);

if (num1%num2==0){
    console.log(`${num1} es multiplo de ${num2}`);
}else{
    console.log(`${num1} no es multiplo de ${num2}`);
}
*/


// #4 Pedir dos números y decir cual es el mayor
/*
let num1,num2;

num1 = +prompt ("Digite el primer numero");
num2 = +prompt ("Digite el segundo numero");
if(num1>num2){
    console.log(`${num1} es mayor que ${num2}`);
}else{
    console.log(`${num2} es mayor que ${num1}`);
}
*/


// #5 Pedir una calificación de 0 a 10 y mostrar de la siguiente manera: Insuficiente, Suficiente, Bien, Excelente
/*
let calificacion;

calificacion = +prompt ("Digite la calificacion");
if(calificacion>=0 && calificacion<6){
    console.log("La calificación en insuficiente");
}else{
    if(calificacion>=6 && calificacion<7){
        console.log("La calificacion es Suficiente");
    }else{
        if(calificacion>=7 && calificacion<9){
            console.log("La calificación es Bien");
        }else{
            if(calificacion>=9 && calificacion<=10){
                console.log("La calificación es excelente");
            }else{
                console.log("La calificación está fuera de los rangos establecidos");
            }
        }
    }
}

*/


// #6 En un videoclub se ofrece la promoción de llevarse tres películas por el precio de las dos más baratas. Haga un programa que, dados los tres precios de las películas, determine la cantidad a pagar. 
/*
let peli_uno;,peli_dos,peli_tres,peli_mas_cara,peli_mas_barata;


peli_uno = +prompt("Digite el precio de la pelicula 1");
peli_dos = +prompt("Digite el precio de la pelicula 2");
peli_tres= +prompt("Digite el precio de la pelicula 3");

if(peli_uno>peli_dos && peli_uno>peli_tres){
    peli_mas_cara = peli_uno;
    peli_mas_barata= Math.min(peli_dos,peli_tres);
    console.log(`El precio a pagar es ${peli_mas_barata}`);
}else{
    if(peli_dos>peli_uno && peli_dos>peli_tres){
        peli_mas_cara=peli_dos;
        peli_mas_barata= Math.min(peli_uno,peli_tres);
        console.log(`El precio a pagar es ${peli_mas_barata}`);
    }else{
        if(peli_tres>peli_dos && peli_tres>peli_uno){
            peli_mas_cara=peli_tres;
            peli_mas_barata= Math.min(peli_uno,peli_dos);
            console.log(`El precio a pagar es ${peli_mas_barata}`);
        }else{
            console.log("Los precios de las tres peliculas son iguales")
        }
    }
}
*/

//#7 Escriba un programa que reciba cuatro calificaciones de un estudiante y devuelva el promedio y la máxima y la mínima calificación.
/*
let not1,not2,not3,not4,minima,maxima,media;
not1= +prompt("Digite la nota 1");
not2= +prompt("Digite la nota 2");
not3= +prompt("Digite la nota 3");
not4= +prompt("Digite la nota 4");

media= (not1+not2+not3+not4)/4;
minima = Math.min(not1,not2,not3,not4);
maxima = Math.max(not1,not2,not3,not4);

console.log(`La media de las cuatro notas es ${media} la nota mínima es ${minima} y la nota máxima es ${maxima}`);
*/

// #8 Realizar un programa que pida tres números y diga cuáles son pares y cuáles impares. 
/*
let num1,num2,num3,numeros;

num1= +prompt("Digite el numero 1");
num2= +prompt("Digite el numero 2");
num3= +prompt("Digite el numero 3");

if (num1%2==0) {
    console.log(`El numero ${num1} es par`);
} else {
    console.log(`El numero ${num1} es impar`);
}

if (num2%2==0) {
    console.log(`El numero ${num2} es par`);
} else {
    console.log(`El numero ${num1} es impar`);
}

if (num3%2==0) {
    console.log(`El numero ${num3} es par`);
} else {
    console.log(`El numero ${num3} es impar`);
}
*/

// #9 Realizar un programa que pida tres números y diga cuál es el mayor, cuál es el segundo mayor, y cuál es el menor. (Mostrar: mayor: persona 1, medio: persona 3, menor: persona 2).
/*
let num1,num2,num3,mayor,mediano,menor;
num1= +prompt("Digite el numero 1");
num2= +prompt("Digite el numero 2");
num3= +prompt("Digite el numero 3");

if (num1>num2 && num1>num3) {
    mayor = num1;
    if (num2>num3) {
        mediano=num2;
        menor=num3;
    }else{
        mediano=num3;
        menor=num2;
    }
    console.log(`El numero mayor es: ${mayor}, el mediano es: ${mediano} y el menor es: ${menor}`);
} else {
    if(num2>num1 && num2>num3){
        mayor= num2;
        if (num1>num3) {
            mediano=num1;
            menor=num3;
        }else{
            mediano=num3;
            menor=num1;
        }
        console.log(`El numero mayor es: ${mayor}, el mediano es: ${mediano} y el menor es: ${menor}`);
    }else{
        if(num3>num1 && num3>num2){
            mayor=num3;
            if (num1>num2) {
                mediano=num1;
                menor=num2;
            }else{
                mediano=num2;
                menor=num1;
            }
            console.log(`El numero mayor es: ${mayor}, el mediano es: ${mediano} y el menor es: ${menor}`);
        }
    }
}

*/

// #10: Pida a usuario la edad y el sexo, para que la computadora le indique si ya puede jubilarse. Tome en cuenta que un Hombre se puede jubilar cuando tenga 60 años o más, en cambio, una mujer mayor se jubilara si tiene más de 54 años.

/*
let edad,sexo,faltante;

edad = +prompt("Digite su edad");
sexo = +prompt("Digite su sexo (1 o 2 segun corresponda) \n 1. Hombre \n 2. Mujer");

if (sexo==1 && edad>=60){
    console.log("Usted ya se puede jubilar");
}else{
    if (sexo==1 && edad<60) {
        faltante = 60-edad;
        console.log(`Le falta(n) ${faltante} año(s) para jubilarse;`);
    }
    if (sexo==2 && edad>54) {
        console.log("Usted ya se puede jubilar");
    } else {
        if (sexo==2 && edad<=54) {
            faltante = 55-edad;
            console.log(`Le falta(n) ${faltante} año(s) para jubilarse;`);
        }  
    }
    
}
*/