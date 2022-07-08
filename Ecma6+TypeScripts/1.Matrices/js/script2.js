var valores =[true,5,false,"hola", 2, "adios"];

var arrayTexto = new Array();
var arrayBoolean = new Array();
var arrayNumero = new Array();


/**
 * Un metodo de arreglo,.push de uso de prinicpal para arrastrar y agregar al final
 * uno o varios elementos o su naturaleza, al final del array
 */

for(var item of valores){
    if(typeof(item) == "string"){
        arrayTexto.push(item);
    }else if (typeof(item) =="boolean"){
        arrayBoolean.push(item);
    }else if(typeof(item)=="number"){
        arrayNumero.push(item);
    }
    
}
console.log(arrayTexto);
console.log(arrayBoolean);
console.log(arrayNumero);
/*
1. Acceder a rango o tamaño de elemento
.length
*/
if(arrayTexto[0].length > arrayTexto[1].length){
    document.write("El texto mayor es: " + arrayTexto[0]+ "<br>");
}else{
    document.write("El texto mayor será:" + arrayTexto[1]+"<br>");
}
/*
2.Itinerancia booleana(buscar true o false)
*/
var resultadoTrue=true;
var resultadoFalse=false;
for(var item of arrayBoolean){
    resultadoTrue = resultadoTrue || item;
    resultadoFalse = resultadoFalse && item;
}
document.write("Resultado verdadero: " + resultadoTrue+ "<br>");
document.write("Resultado falso: " + resultadoFalse+ "<br>");

/*
3.Operaciones de algebra en matrices, de asignación compuesta
*/
var suma =0;
var multiplicacion=1;

for(var item of arrayNumero){
    suma +=item;
    multiplicacion*=item;
    console.log(arrayNumero[0]);
}
document.write("Suma: "+ suma+ "<br>");
document.write("Resta: "+ (arrayNumero[0]- arrayNumero[1]) + "<br>");
document.write("Multiplicacion: "+ multiplicacion + "<br>");
document.write("Division: "+ arrayNumero[0]/arrayNumero[1] + "<br>");
document.write("Resto: "+ (arrayNumero[0] % arrayNumero[1]) + "<br>");

/*
4. Ejercicio, dado un array, obtener por console:
a. el 1er elemento
b. nº de elementos
c. ultimo elemento.
*/
var frutas =["Manzanas", "Platanos","Sandía", "Naranjas"]
var primero = frutas[0];
console.log(primero);
console.log(frutas.length);
var ultimo =(frutas[frutas.length-1]);

/*
5.Acciones Dinámicas de Array
a)Añadir un elemento al array
*/

var nuevaLongitud = frutas.push("Melocoton");
/*
b) Eliminar un elemento del array
*/
var ultimo =frutas.pop();
console.log(frutas);
/*
c) Cambiar el inicio de un Array
*/
var inicioArrayFruta = frutas.unshift("Fresa");
console.log(frutas);

/*
d) Posicion o indice de un elemento en el Array
*/
var posicion = frutas.indexOf('Platano');
console.log(posicion);