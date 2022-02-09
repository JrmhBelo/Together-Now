async function signIn() {  // Feito
    alert("Utilizador criado")
    utilizadorid = sessionStorage.getItem("utiId")
    let obj = {

        nomepId: document.getElementById("nomep").value,
        nomeuId: document.getElementById("nomeu").value,
        email: document.getElementById("email").value,
        pass: document.getElementById("pass").value,
        telemovelId: document.getElementById("telemovel").value,
        generoId: document.getElementById("genero").value,
            
    };
    try {
    let novouti = await $.ajax({
        url: "/api/utilizador/", //
        method: 'post',
        dataType: 'json',
        data: JSON.stringify(obj),
        contentType: 'application/json'
    });
    console.log(novouti);
    document.getElementById("Concluído").innerHTML =
        "Utilizador criado";
    } catch (err) {
        console.log(err);
    }    
} 