
    const section = document.getElementsByClassName("section")
    const newElement = document.createElement ("ol")
    const input = document.getElementById("input")
    const button = document.getElementsByClassName("addbuton")
    const lista = document.getElementById("li")

    const agregarText = function(){
        let textNuevo = inputElement.value;
        let texto = document.createElement("section")
        texto.innerText = textNuevo;
        input.value = "";
        lista.appendChild(texto)
        let btn = document.createElement("addbuton");
        btn.innerHTML = "Sugerencias";
        }

        // if(input.value === "") return
        // const newElement = document.createElement("p");
        // nuevoText.textContent = input.value;
    
        // input.value="";

        // section.appendChild(newElement);


    
addButton.innerHTML = "texto"
let numero = prompt("Introduce tu edad")