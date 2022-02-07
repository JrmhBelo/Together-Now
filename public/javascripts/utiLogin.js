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
        window.location = "utiProfile.html";
    } catch (err) {
        document.getElementById("msg").innerText = err.responseJSON.msg;
    }
}
async function loadUti() { // esta ok 
    try {
      let html = "";
      let id = sessionStorage.getItem("utiId");
      let data = await $.ajax({
        url: `api/utilizador/${id}`,
        method: "get",
        dataType: "json",
      });
      document.getElementById(
        "utiId"
      ).innerHTML = `<h1>${utilizador.uti_nomep}</h1>`;
    } catch (error) {}
}
  