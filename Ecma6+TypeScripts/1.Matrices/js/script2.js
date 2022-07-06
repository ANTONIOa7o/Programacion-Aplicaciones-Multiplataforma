var valores =[true,5,false,"hola", 2, "adios"];

var arrayTexto = new Array();
var arrayBoolean = new Array();
var arrayNumero = new Array();


/**
 * Un metodo de arreglo, de uso de prinicpal para arrastrar y agregar al final
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