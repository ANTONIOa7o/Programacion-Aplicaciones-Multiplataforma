var numero = new Array(1,2,3,4,5,6,7,8,9);//Variable Global
//1.reccorrido de un array

for(var i =0; i<numero.length;i++){
    console.log(numero[i]);
}
//Misma forma mas resumida

for(var i in numero){
    console.log(numero[i]);
}
//Otra de forma de recorrer valores de elementos
for(var elemento of numero){
    console.log(elemento);
}
//METODOS DEL OBJETO ARRAY
//Array Invertido
document.write("<h4>Array Invertido: "+ numero.reverse()+"<br>");
//Array ascendente
document.write("Array Ascendente: "+ numero.sort()+"<br>");
//Array separados por una grafia
document.write("Array separado por una grafia: "+ numero.join('|')+"<br>");
//Array lemento a partin o desde un indice
document.write("Array a partir de un indice: "+numero.slice(4)+"<br>");

//Creacion de otro Array
var letras = ["a","b","c","d","e"];

//Concatenacion array objetc con otro array de variable.
document.write("Array Concatenado: "+ numero.concat(letras)+"<br>")
//Concatenacion inversa:
document.write("Array concatenado inverso: "+ letras.concat(numero));