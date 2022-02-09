async function login() {    // aguas ☻
    try {       
        let obj = {
            email: document.getElementById("email").value,
            pass: document.getElementById("pass").value
        }
        let utilizador = await $.ajax({
            url: '/api/utilizador/login',
            method: 'post',
            dataType: 'json',
            data: JSON.stringify(obj),
            contentType: 'application/json'
        });
        sessionStorage.setItem("utiId",utilizador.uti_id);
        alert("Login com sucesso")
        window.location = "utiProfile.html";
    } catch (err) {
        document.getElementById("msg").innerText = err.responseJSON.msg;
        alert("Wrong email or password");
    }
}
// async function loadUti() { // fazes nada , para apagar ☻
//     try {
//       let html = "";
//       let id = sessionStorage.getItem("utiId");
//       let data = await $.ajax({
//         url: `api/utilizador/${id}`,
//         method: "get",
//         dataType: "json",
//       });
//       document.getElementById(
//         "utiId"
//       ).innerHTML = `<h1>${utilizador.uti_nomep}</h1>`;
//     } catch (error) {}
// }
  