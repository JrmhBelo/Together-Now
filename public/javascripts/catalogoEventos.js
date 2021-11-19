window.onload = async function() {
    let elem = document.getElementById("eventos");
    try {
        let eventos = await $.ajax({
        url: "/api/eventos",
        method: "get",
        dataType: "json"
        });
        let html ="";
        for(let evento of eventos)
            html += `<section onclick='showEvento(${evento.eve_id})'>
                ${evento.eve_nome}</section>`
        elem.innerHTML = html;
    } catch(err) {
        console.log(err);
        elem.innerHTML = "<h1> Page not Available </h1>";
    }
}
function showEvento(id) {
    sessionStorage.setItem("eventoId",id);
    window.location = "evento.html";
}

function createEventosHTML(eventos) {
    let html = "";
    for(let evento of eventos){
            html += `<section onclick='showEvento(${evento.eve_id})'>
                ${evento.eve_nome}</section>`
    }
    document.getElementById("eventos").innerHTML = html;
}

async function filtrar() {
    try {
        let categoria= document.getElementById("categoria").value;   
       
        
        let eventos = await $.ajax({
            url: `/api/eventos/search/?categoria=${categoria}`,
            method: "get",
            dataType: "json"
        
        });
        createEventosHTML(eventos);
    } catch(err) {
        
        console.log(err);
        }
}

