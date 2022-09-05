window.onload= function(){
    var caja1 = document.getElementById("caja1")
    var intercambiar = document.getElementById("intercambiar")
    var copiar=document.getElementById("copiar")
    caja1.focus()
    caja1.onkeyup = (actualizar)
    intercambiar.onclick = function (){intercambio();actualizar()}
    copiar.onclick = function (){copiarTexto();actualizar()}
} 
    
function actualizar() {
    var caja1 = document.getElementById("caja1")
    var caja2 = document.getElementById("caja2")
    var texto1 = document.getElementById("texto1")
    var texto2 = document.getElementById("texto2")
    var intercambiar = document.getElementById("intercambiar")
    if (caja1 != ""){
        caja2.style.backgroundImage = "none"
        if (texto1.textContent == "Desencriptado"){
            caja2.value = encriptar()
        }
        if (texto1.textContent == "Encriptado"){
            caja2.value = desencriptar()
        }
    }
    if (caja1.value == ""){
        caja2.style.backgroundImage = 'url("imagenes/nohay.png")'
    }
}

function encriptar(){
    var caja1 = document.getElementById("caja1")
    resultado = caja1.value
    let matriz = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    for( i = 0; i < matriz.length;i++){
        if(resultado.includes(matriz[i][0])){
            console.log("yeap")
            resultado=resultado.replaceAll(matriz[i][0],matriz[i][1]);
        }
    }
    return resultado
}

function desencriptar(){
    var caja1 = document.getElementById("caja1")
    resultado = caja1.value
    let matriz = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    for( i = 0; i < matriz.length;i++){
        if(resultado.includes(matriz[i][1])){
            console.log("yeap")
            resultado=resultado.replaceAll(matriz[i][1],matriz[i][0]);
        }
    }
    return resultado
}

function intercambio() {
    var caja1 = document.getElementById("caja1")
    var caja2 = document.getElementById("caja2")
    var texto1 = document.getElementById("texto1")
    var texto2 = document.getElementById("texto2")
    var copiartexto = ""
    caja1.value = caja2.value
    copiartexto = texto1.textContent
    texto1.textContent = texto2.textContent
    texto2.textContent = copiartexto
    caja1.focus()
}

function copiarTexto(){
    var caja1 = document.getElementById("caja1")
    var caja2 = document.getElementById("caja2")
    var texto1 = document.getElementById("texto1")
    var texto2 = document.getElementById("texto2")
    var copiartexto = ""
    caja2.select();
    document.execCommand("copy");
    caja1.value= ""
    caja2.value = ""
    caja1.focus();
}
