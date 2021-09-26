function suma(a,b){
 let res = a + b;}    

console.log(22 + 5);

let edad = prompt("¿Cuál es tu edad?");

if (edad < 18){
     alert("Lo siento, no puedes acceder a la pagina")
     }
else if(edad <= 23){
   alert("Por ser la primera vez, tienes un 20% en nuestros cursos ")
 }
 else if(edad > 27){
    alert("No tienes ningún descuento") 
 };

const main = document.getElementsByClassName("main");
const input = document.getElementsByClassName("input");
const addButton = document.getElementsByClassName("addButton");

const agregarComentario = function () {
    nuevoComentario = document.createElement("p");
    nuevoComentario.textContect = input.value;

    main.applendChild(nuevoComentario);
    
}

addEventListener("click", agregarComentario);