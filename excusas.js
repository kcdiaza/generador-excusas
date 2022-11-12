let who = ['The dog','My grandma','His turtle','My bird'];
let action = ['ate','peed','crushed','broke'];
let what = ['my homework', 'the keys', 'the car'];
let when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];

function obtenerRandom (max,min){
   return Math.floor(Math.random()*max)+min;
}

let quien = who[obtenerRandom(3,0)];

let accion = action[obtenerRandom(3,0)];

let que = what[obtenerRandom(2,0)];

let cuando = when[obtenerRandom(4,0)];

let excusatexto = quien + " " + accion + " " +que + " " +cuando;

document.getElementById("excusa").innerText = excusatexto;