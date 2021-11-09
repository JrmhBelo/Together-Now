var eventoId;

window.onload = async function() {
    let eventoId = sessionStorage.getItem("eventoId");
    try {
        let evento = await $.ajax({
            url: "/api/eventos/"+eventoId,
            method: "get",
            dataType: "json"
        });
        console.log(evento);

        document.getElementById("nome").innerHTML = evento.eve_nome;
        document.getElementById("descricao").innerHTML = evento.eve_descricao;
        new Date(document.getElementById("dataI").innerHTML) = evento.eve_datai;
        new Date(document.getElementById("dataF").innerHTML) = evento.eve_dataf;
        document.getElementById("horaI").innerHTML = evento.eve_horai;
        document.getElementById("horaF").innerHTML = evento.eve_horaf;
        document.getElementById("maxPart").innerHTML = evento.eve_maxparticipantes;
        document.getElementById("beneficiario").innerHTML = evento.eve_beneficiario;
        document.getElementById("estado").innerHTML = evento.eve_estado;
        document.getElementById("categoria").innerHTML = evento.eve_categ;
            
        
    } catch(err) {
        console.log(err);
        
    }
}


