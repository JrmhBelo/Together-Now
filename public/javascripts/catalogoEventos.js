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


async function filtrar() {
    try {
        let categoriaId= document.getElementById("categoria").value;   
       
        
        let eventos = await $.ajax({
            url: `/api/eventos/search/?categoria=${categoriaId}`,
            method: "get",
            dataType: "json"
        
        });
        showEventos(eventos);
    } catch(err) {
        let elem = document.getElementById("eventos");
        console.log(err);
        elemMain.innerHTML = "<h1> Página não está disponível</h1>"+
                            "<h2> Por favor tente mais tarde</h2>";
    }
}

