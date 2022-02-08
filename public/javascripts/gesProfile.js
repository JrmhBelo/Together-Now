var gesID = sessionStorage.getItem("gesId");


window.onload = async function() {
    console.log(gesID)
    let elem = document.getElementById("eventosGestao");
    try {
        let gesId = sessionStorage.getItem("gesId");
        let eventos = await $.ajax({
        url: "/api/eventos/"+gesId+"/gestor", //mudar 1 para gesId quando tiver login para gestor de eventos
        method: "get",
        dataType: "json"
        });

        let id = gesID;
        let gestor = await $.ajax({
            url: "api/gestor/"+id,
            method: "get",
            dataType: "json"
          });
          console.log(gestor);
          document.getElementById("gesId").innerHTML = `<h1>${gestorevento.ges_nomep}</h1>`;

        let html ="";
        for(let evento of eventos)
            html += `<section onclick='showEvento(${evento.eve_id})'>
                ${evento.eve_nome}</section>`
        elem.innerHTML = html;
    } catch(err) {
        console.log(err);
        elem.innerHTML = `<h1> Please login to see your events </h1>
                        <div><h2><a href="gesLogin.html"><img src="images/key.svg" width="200" height="200" class="logo"></a></h2>
                        </div>`;
    }
}
function showEvento(id) {
    sessionStorage.setItem("eventoId",id);
    window.location = "eventoGestao.html";
}

//problema na linha 22

// ReferenceError: gestorevento is not defined
//at window.onload (gesProfile.js:22:63)