var eventoId;
window.onload = async function() {
    let cicloviaId = sessionStorage.getItem("eventoId");
    try {
        let ciclovia = await $.ajax({
            url: "/api/eventos/"+eventoId,
            method: "get",
            dataType: "json"
        });
        console.log(evento);
        

        document.getElementById("nome").innerHTML = Evento.nome;
        document.getElementById("descricao").innerHTML = ciclovia.descricao;
        document.getElementById("distrito").innerHTML = ciclovia.distrito;
        document.getElementById("cidade").innerHTML = ciclovia.cidade;
        document.getElementById("extensao").innerHTML = ciclovia.extensao;
        document.getElementById("inicio").innerHTML = ciclovia.inicio;
        document.getElementById("fim").innerHTML = ciclovia.fim;
            
        
    } catch(err) {
        console.log(err);
        
    }
}


