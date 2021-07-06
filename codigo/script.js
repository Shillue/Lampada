const ligar = document.getElementById("ligar");
const apagar = document.getElementById("apagar");
const lampada = document.getElementById("lampApagada");

function verificar(){
    return lampada.src.indexOf("quebrada") > -1
}

function btLigar(){
    if(!verificar()){
    lampada.src = "../imagens/acesa - 02.jpg" ; 
    }
}
function btApagar(){
    if(!verificar()){
    lampada.src = "../imagens/apagada - 01.jpg" ; 
    }
}
function lampQuebra(){
    lampada.src = "../imagens/quebrada - 03.jpg" ;
}


//eventos do mause e de click
lampada.addEventListener("mouseover",btLigar);
lampada.addEventListener("mouseleave",btApagar);
lampada.addEventListener("dblclick", lampQuebra);