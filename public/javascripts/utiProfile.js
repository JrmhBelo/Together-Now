var utiID = sessionStorage.getItem("utiId");


window.onload = async function() {
    console.log(utiID)
    let elem = document.getElementById("eventosRegistado");
    try {
        let utiId = sessionStorage.getItem("utiId"); // ☻
        let eventos = await $.ajax({
            url: "/api/utilizador/"+utiId+"/eventos",
            method: "get",
            dataType: "json"
        });

        let id = utiID;
        let utilizador = await $.ajax({
        url: "api/utilizador/"+id,
        method: "get",
        dataType: "json"
      });
      console.log(utilizador);
      document.getElementById("utiId").innerHTML = `<h3>${utilizador.uti_nomep} ${utilizador.uti_nomeu}</h3>`;

        let html = "";
        for (let evento of eventos) {
            html +=` <section onclick='showEvento(${evento.eve_id})'>
                ${evento.eve_nome}</section>`
        elem.innerHTML = html;
        }
    } catch (err) {
        console.log(err);
        elem.innerHTML = `<h1> Please login to see your events </h1>
                         <div><h2><a href="utiLogin.html"><img src="images/key.svg" width="200" height="200" class="logo"></a></h2>
                        </div>`;
    }
}
function showEvento(id) {
    sessionStorage.setItem("eventoId",id);
    window.location = "evento.html";
}

async function logout() {
    sessionStorage.removeItem("utiId");
    window.location = "utiLogin.html";
    console.log(sessionStorage.getItem("utiId"));
}