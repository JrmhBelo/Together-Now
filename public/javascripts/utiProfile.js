window.onload = async function() {
    try {
        //let utiId = sessionStorage.getItem("utiId");
        let utiId = 1;
        let eventos = await $.ajax({
            url: `/api/utilizador/${utiId}/eventos`,
            method: "get",
            dataType: "json"
        });
        let html = "";
        for (let evento of eventos) {
            html += `<section onclick='showEvento(${evento.eve_id})'>
                ${evento.eve_nome}</section>`
        elem.innerHTML = html;
        }
        document.getElementById("eventos").innerHTML = html;
    } catch (err) {
        console.log(err);
    }
}
function showEvento(id) {
    sessionStorage.setItem("eventoId",id);
    window.location = "eventoGestao.html";
}
