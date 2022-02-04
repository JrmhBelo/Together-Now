window.onload = async function() {
    let elem = document.getElementById("eventosRegistado");
    try {
        let utiId = sessionStorage.getItem("utiId"); // ☻
        let eventos = await $.ajax({
            url: "/api/utilizador/"+utiId+"/eventos",
            method: "get",
            dataType: "json"
        });
        let html = "";
        for (let evento of eventos) {
            html += `<section onclick='showEvento(${evento.eve_id})'>
                ${evento.eve_nome}</section>`
        elem.innerHTML = html;
        }
    } catch (err) {
        console.log(err);
        elem.innerHTML = `<h1> Please login to see your events </h1>
                         <div><h2><a href="utiLogin.html"><img src="images/key.svg" width="200" height="200" class="logo"></a></h2>
                         <h1>↑ Here</h1>
                         </div>`;
    }
}
function showEvento(id) {
    sessionStorage.setItem("eventoId",id);
    window.location = "evento.html";
}
