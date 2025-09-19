let amigos = []; 

function limpiarCaja(){
    document.querySelector("#amigo").value="";
}

function agregarAmigo(){
    let nombres = document.getElementById("amigo").value;
    console.log(nombres);
    if(nombres === ""){
        alert("El campo no puede estar vacío");
        return;
    }else{
        amigos.push(nombres);
        console.log(amigos);
        limpiarCaja();
        listaDeAmigos();
    }
}

function listaDeAmigos(){
    const listaAmigos=document.getElementById("listaAmigos");
    listaAmigos.innerHTML="";
    for(let i=0; i<amigos.length; i++){
        const li=document.createElement("li");
        li.textContent = amigos[i];
        li.className="list-Item";
        listaAmigos.appendChild(li);
    }
}

function sortearAmigo(){
    if(amigos.length===0){
        alert("Debes ingresar los nombres primero");
        return;
    }
    let indice=Math.floor(Math.random()*amigos.length);
    let amigoSorteado=amigos[indice];
    let resultado=document.getElementById("resultado");
    resultado.innerHTML=(`El amigo sorteado es: ${amigoSorteado}`);
}