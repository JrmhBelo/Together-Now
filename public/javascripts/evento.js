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
        // document.getElementById("data").innerHTML = evento.eve_data;
        // document.getElementById("horaI").innerHTML = evento.eve_datai;
        // document.getElementById("horaF").innerHTML = evento.eve_dataf;
        document.getElementById("maxPart").innerHTML = evento.eve_maxparticipantes;
        document.getElementById("beneficiario").innerHTML = evento.eve_beneficiario;
        document.getElementById("estado").innerHTML = evento.eve_estado;
        document.getElementById("categoria").innerHTML = evento.eve_categ;
            
        
    } catch(err) {
        console.log(err);
        
    }
}


