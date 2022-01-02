 let fs = require('fs')
let tareas = fs.readFileSync(__dirname + '/tareas.json', 'utf-8');
let datosConvertidos = JSON.parse(tareas);

let prueba = process.argv[2];

switch(prueba){
    case "listar":
        console.log(datosConvertidos);
        break;
    case undefined:
        console.log("Atención - Tienes que pasar una acción.");
        break;
    default:
        console.log("No entiendo qué quieres hacer.");0
        break;
}

>dfffggg
 ngthng
/* Repetir como un loro
Vamos a programar una función que se comporte como un loro. Sí, todo lo que "oye", ¡lo repite!

La función debe llamarse loro y debe recibir como parámetro el texto y repetirlo 5 veces por consola. */
/* let fechaActual = new Date ();
let anio = fechaActual.getFullYear();
let mes = fechaActual.getMonth();
let dia = fechaActual.getDate();


console.log("Día: "+fechaActual.getDate())
console.log('Hoy es el día '+ dia+' del mes '+ mes+' del año '+anio) */
