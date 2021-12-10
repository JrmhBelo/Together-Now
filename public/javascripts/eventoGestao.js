var eventoId;

window.onload = async function() {
    loadStats();
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
        //document.getElementById("dataI").innerHTML = evento.eve_datai;
        //document.getElementById("dataF").innerHTML = evento.eve_dataf;
        //document.getElementById("horaI").innerHTML = evento.eve_horai;
        //document.getElementById("horaF").innerHTML = evento.eve_horaf;
        document.getElementById("maxPart").innerHTML = evento.eve_maxparticipantes;
        document.getElementById("beneficiario").innerHTML = evento.eve_beneficiario;
        document.getElementById("estado").innerHTML = evento.eve_estado;
        document.getElementById("categoria").innerHTML = evento.eve_categ;
        //document.getElementById("nomep").innerHTML= utilizador.uti_nomep;  // ☻
        
    } catch(err) {
        console.log(err);
        
    }
}
//----

async function loadStats() {
    let eventoId = sessionStorage.getItem("eventoId");
    try {
        let utilizadores = await $.ajax({
            url: "/api/utilizador/"+eventoId+"/estatisticas",
            method: "get",
            dataType: "json"
        });
        console.log(utilizadores)
        
        let tbody = document.getElementById("estatisticas"); //html tag
        let html ="";
        for(let utilizador of utilizadores)
            html +=`<tr><td>${utilizador.uti_nomep} </td>
            <td>${utilizador.uti_nomeu} </td>
            <td>${utilizador.uti_idade}</td>
            <td>${utilizador.uti_totalp}</td>
            <td><input type="button" value="Presente" onclick="participo()"></td>
            </tr>`
            ;
        tbody.innerHTML = html;
    } catch(err) {
        console.log(err);
        elem.innerHTML = "<h1> Page not Available </h1>"
    }
}

async function iniciar() {
    let eventoId = sessionStorage.getItem("eventoId");
    let obj = {
        eventoId,
        estado : "Iniciado"
        };
        try{
        let evento = await $.ajax({
            url: "/api/eventos/estado/"+eventoId,
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
    let eventoId = sessionStorage.getItem("eventoId");
    let obj = {
        eventoId,
        estado : "Terminado"
        };
        try{
        let evento = await $.ajax({
            url: "/api/eventos/estado/"+eventoId,
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
    let eventoId = sessionStorage.getItem("eventoId");
    let obj = {
        eventoId,
        estado : "Cancelado"
        };
        try{
        let evento = await $.ajax({
            url: "/api/eventos/estado/"+eventoId,
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

async function adiar() {
    let eventoId = sessionStorage.getItem("eventoId");
    let obj = {
        eventoId,
        estado : "Adiado"
        };
        try{
        let evento = await $.ajax({
            url: "/api/eventos/estado/"+eventoId,
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

async function participo(){
    let eventoId = sessionStorage.getItem("eventoId");
    let obj = {
        eventoId,
        utiId: 1
        };
        try{
        let evento = await $.ajax({
            url: "/api/participo/",
            method: 'post',
            dataType: 'json',
            data: JSON.stringify(obj),
            contentType: 'application/json'
        });
        console.log(evento);
    } catch (err) {
        console.log(err);
    } 

}