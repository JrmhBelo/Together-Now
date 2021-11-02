window.onload = async function() {
    try {
        let utiId = sessionStorage.getItem("utiId");
        let eventos = await $.ajax({
            url: `/api/utilizador/${utiId}/eventos`,
            method: "get",
            dataType: "json"
        });
        let html = "";
        for (let evento of eventos) {
            html+=`<section>
                <h3>${evento.eve_nome}</h3>
                <p>Estado: ${evento.eve_estado} </p>
            </section>`
        }
        document.getElementById("eventos").innerHTML = html;
    } catch (err) {
        console.log(err);
    }
}