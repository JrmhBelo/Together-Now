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
        document.getElementById("dataI").innerHTML = formatDate(evento.eve_datai);
        document.getElementById("dataF").innerHTML = formatDate(evento.eve_dataf);
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

function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [day, month, year].join('-');
}
 
