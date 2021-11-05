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
        /*document.getElementById("data").innerHTML = evento.eve_data;
        document.getElementById("horaI").innerHTML = evento.eve_datai;
        document.getElementById("horaF").innerHTML = evento.eve_dataf;
        document.getElementById("maxPart").innerHTML = evento.eve_maxparticipantes;
        document.getElementById("beneficiario").innerHTML = evento.eve_beneficiario;
        document.getElementById("estado").innerHTML = evento.eve_estado;
        document.getElementById("categoria").innerHTML = evento.eve_categ;*/
            
        
    } catch(err) {
        console.log(err);
        
    }
}

async function iniciar() {
    
    let obj = {
        eventoId : sessionStorage.getItem("eventoId") ,
        estado : "Em Progresso"
        }
        try{
        let evento = await $.ajax({
            url: "/api/eventos/"+eventoId+"/estado",
            method: 'put',
            dataType: 'json',
            data: JSON.stringify(obj),
            contentType: 'application/json'
        });
        console.log(evento);
    } catch (err) {
        console.log(err);
    }    
}

async function terminar() {
    
    let obj = {
        eventoId : sessionStorage.getItem("eventoId"),
        estado : "Terminado"
        }
        try{
        let evento = await $.ajax({
            url: "/api/eventos/"+eventoId+"/estado",
            method: 'put',
            dataType: 'json',
            data: JSON.stringify(obj),
            contentType: 'application/json'
        });
        console.log(evento);
    } catch (err) {
        console.log(err);
    }    
}

async function cancelar() {
    
    let obj = {
        eventoId : sessionStorage.getItem("eventoId"),
        estado : "Cancelado"
        }
        try{
        let evento = await $.ajax({
            url: "/api/eventos/"+eventoId+"/estado",
            method: 'put',
            dataType: 'json',
            data: JSON.stringify(obj),
            contentType: 'application/json'
        });
        console.log(evento);
    } catch (err) {
        console.log(err);
    }    
}
