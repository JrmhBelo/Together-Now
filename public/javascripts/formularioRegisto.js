var utiID;

window.onload = async function () {
    //console.log(utiID)
    try{
        utiID = sessionStorage.getItem("utiId");
        let utilizador = await $.ajax({
        url: "api/utilizador/"+utiID,
        method: "get",
        dataType: "json"
      });
      //console.log(utilizador)
    }catch(err){
        console.log(err);
    }

}

async function registar() {
    alert("Registado no evento")
    utilizadorid = sessionStorage.getItem("utiId")
    let obj = {

        cidadeId: document.getElementById("cidade").value,
        concelhoId: document.getElementById("concelho").value,
        moradaId: document.getElementById("morada").value,
        escivilId: document.getElementById("escivil").value,
        escolaridadeId: document.getElementById("escolaridade").value,
        sitEmpregoId: document.getElementById("sitEmprego").value,
        profissaoId: document.getElementById("profissao").value,
        motivacaoId: document.getElementById("motivacao").value,
        eventoId: sessionStorage.getItem("eventoId"),
        utiId: utilizadorid
        //utiId: sessionStorage.getItem("utiId")
    
    };
    try {
    let registo = await $.ajax({
        url: "/api/registos/",
        method: 'post',
        dataType: 'json',
        data: JSON.stringify(obj),
        contentType: 'application/json'
    });
    console.log(registo);
    document.getElementById("Concluído").innerHTML =
        "Utilizador Registado";
    } catch (err) {
        console.log(err);
    }    
}