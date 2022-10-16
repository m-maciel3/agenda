function mostrarOcultarSenha(){    
    var mostrarSenha = document.querySelector("#mostrarSenha").style.display;
    
    if(mostrarSenha == "block"){
    document.querySelector("#mostrarSenha").style.display="none";
    document.querySelector("#ocultarSenha").style.display="block";
    document.querySelector("#senha").type="text";
    }
        else 
        {
            
            document.querySelector("#mostrarSenha").style.display="block";
            document.querySelector("#ocultarSenha").style.display="none";
            document.querySelector("#senha").type="password";     
        }
}
function mostrarOcultarRepitaSenha(){    
    var mostrarSenha = document.querySelector("#mostrarRepitaSenha").style.display;
    
    if(mostrarSenha == "block"){
    document.querySelector("#mostrarRepitaSenha").style.display="none";
    document.querySelector("#ocultarRepitaSenha").style.display="block";
    document.querySelector("#repitaSenha").type="text";
    }
        else 
        {
            
            document.querySelector("#mostrarRepitaSenha").style.display="block";
            document.querySelector("#ocultarRepitaSenha").style.display="none";
            document.querySelector("#repitaSenha").type="password";     
        }
}