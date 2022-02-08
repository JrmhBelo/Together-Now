async function loginGes() {    // aguas ☻
    try {       
        let obj = {
            email: document.getElementById("email").value,
            pass: document.getElementById("pass").value
        }
        let gestorevento = await $.ajax({
            url: '/api/gestor/login',
            method: 'post',
            dataType: 'json',
            data: JSON.stringify(obj),
            contentType: 'application/json'
        });
        sessionStorage.setItem("gesId",gestorevento.ges_id);
        window.location = "gesProfile.html";
    } catch (err) {
        document.getElementById("msg").innerText = err.responseJSON.msg;
    }
}
async function loadGes() { // nada
    try {
      let html = "";
      let id = sessionStorage.getItem("gesId");
      let data = await $.ajax({
        url: `api/gestor/${id}`,
        method: "get",
        dataType: "json",
      });
      document.getElementById(
        "gesId"
      ).innerHTML = `<h1>${gestorevento.ges_nomep}</h1>`;
    } catch (error) {}
}
  