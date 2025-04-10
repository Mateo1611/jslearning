//Sabemos que Array es un objeto , por lo tanto tiene metodos , de estos método hay algunos que modifican el array original y otros que no

//Ejemplo 
let a=[1,2,3,4];
a.push(5);
console.log(a);//vemos que se agrega un elemento al final 

a.pop() //elimina el últmo elemento 
console.log(a)

a.shift()//elimina el primer elemento
console.log(a)

a.splice(1,1) //desde el indice 1 borre 1
console.log(a)

a.splice(1,0,3) //desde el indice 1 , elimine cero, agregue el 3 , (se podrian agregar más (1,0,3,4))
console.log(a)

a.splice(1,1,"tres") //desde el indice 1 elimine 1 y agregue "tres" es como hacer un cambio
console.log(a)

a.reverse()
console.log(a)

a.reverse()
console.log(a)

a.unshift(1,1.5) //agrega elementos al principio 
console.log(a)

a.fill("hola",2,4) //(valor, inicio, fin sin incluir) rellena los elementos del 2 hasta el 4 con un hola
console.log(a)

b=[2,1,5,8,3,2,10]

a.sort((a,b)=>a-b) //ordena de forma ascendente
console.log(a)

b.sort((a,b)=>a-b) //ordena de forma ascendente
console.log(b)

b.sort((a,b)=>b-a) //ordena de forma ascendente
console.log(b)


//METODOS INMUTABLES: ESTOS DEJAN EL ARRAY ORIGINAL TAL COMO ESTÁ Y GENERAN OTRO ARRAY MODIFICADO BASADO EN EL PRIMERO 

console.log(b.map(n=>n**2))//esto es un nuevo array 
console.log(b)//podemos ver que b se mantiene igual

console.log(b.filter(n=>n%2==1)) //trae los numeros impares con la condicion que le di 
console.log(b.filter(n=>n%2==0)) //filtra los pares

// Array base para pruebas
const numeros = [10, 20, 30, 40, 50];
const anidados = [1, [2, [3, 4]], 5];

// .slice(inicio, fin)
// Crea una copia desde el índice 1 hasta el 3 (sin incluir el 3)
const subArray = numeros.slice(1, 3); 
console.log(".slice:", subArray); // [20, 30]

// .concat()
// Une dos arrays en uno nuevo
const unidos = numeros.concat([60, 70]);
console.log(".concat:", unidos); // [10, 20, 30, 40, 50, 60, 70]

// .flat(profundidad)
// Aplana arrays anidados hasta el nivel que digas
const aplanado = anidados.flat(2); 
console.log(".flat:", aplanado); // [1, 2, 3, 4, 5]

// .find(callback)
// Devuelve el primer valor que cumple la condición
const encontrado = numeros.find(n => n > 25);
console.log(".find:", encontrado); // 30

// .findIndex(callback)
// Devuelve el índice del primer valor que cumple la condición
const encontradoIndex = numeros.findIndex(n => n === 30);
console.log(".findIndex:", encontradoIndex); // 2

// .every(callback)
// Verifica si todos cumplen la condición
const todosMayoresA5 = numeros.every(n => n > 5);
console.log(".every:", todosMayoresA5); // true

// .some(callback)
// Verifica si al menos uno cumple
const algunoMayorA45 = numeros.some(n => n > 45);
console.log(".some:", algunoMayorA45); // true

// .reduce(callback, valorInicial)
// Suma todos los elementos del array
const suma = numeros.reduce((acum, actual) => acum + actual, 0);
console.log(".reduce:", suma); // 150

// .includes(valor)
// Verifica si el valor está en el array
const tiene30 = numeros.includes(30);
console.log(".includes:", tiene30); // true

// .indexOf(valor)
// Devuelve el índice de un valor
const indiceDe40 = numeros.indexOf(40);
console.log(".indexOf:", indiceDe40); // 3

// .join(separador)
// Convierte el array a string con separador personalizado
const comoTexto = numeros.join(" - ");
console.log(".join:", comoTexto); // "10 - 20 - 30 - 40 - 50"

// .toString()
// Convierte el array a string separado por comas
const textoSimple = numeros.toString();
console.log(".toString:", textoSimple); // "10,20,30,40,50"

// .at(index)
// Accede a un índice específico (permite negativos)
const ultimo = numeros.at(-1);
console.log(".at:", ultimo); // 50