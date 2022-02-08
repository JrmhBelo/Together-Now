var gesID;

window.onload = async function () {
    getLocation([38.707325418964764, -9.152454160542419])
    console.log(gesID)

    try{
        gesID = sessionStorage.getItem("gesId");
        let gestorevento = await $.ajax({
            url: "api/gestor/"+userId,
            method: "get",
            dataType: "json"
          });
        console.log(gestorevento);
    }catch(err){
        console.log(err);
    }
    
}
async function getLocation(coords) {

    mymap = L.map('mapid').setView(coords, 12);

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoibWJ1Z2FsaG8iLCJhIjoiY2phOWdhbWR5MGprdDJ5cDgzenR5MXMxMCJ9.n38CZPOHiDjdbKXw2YuEmA'
    }).addTo(mymap);

    L.Control.geocoder().addTo(mymap);

  var myMarker = L.marker(coords).addTo(mymap);

  mymap.on("click", function(e){
    var {lat,lng} = e.latlng
    myMarker.setLatLng([lat, lng])
    document.getElementById("latitude").textContent = lat;
    document.getElementById("longitude").textContent = lng;
    getMorada(lat,lng);
    }) 

}

async function getCoordenadas(morada) {
    try {
        let evento = await $.ajax({
            url: "https://nominatim.openstreetmap.org/search?q="+morada+"&format=json",
            method: "get",
        });
        for (let i = 0; i < 1 ; i++) {
            document.getElementById("latitude").textContent = evento[i].lat;
            document.getElementById("longitude").textContent = evento[i].lon;
            mymap.remove("mapid")
            getLocation([evento[i].lat, evento[i].lon])
        }
          } catch(err) {
          console.log(err);
       }
}

 async function getMorada(lat,lng) {
    try {
        let evento = await $.ajax({
            url: "https://nominatim.openstreetmap.org/reverse?lat="+lat+"&lon="+lng+"&format=json",
            method: "get",
        });
        document.getElementById("morada").value = evento.display_name;
          } catch(err) {
          console.log(err);
       }
  }

async function criar() {
        alert("Evento criado")
        gestorid = sessionStorage.getItem("gesId")
        let obj = {
            nomeId: document.getElementById("nome").value,
            beneficiarioId: document.getElementById("beneficiario").value,
            descricaoId: document.getElementById("descricao").value,
            dataIId: document.getElementById("dataI").value,
            dataFId: document.getElementById("dataF").value,
            horaIId: document.getElementById("horaI").value,
            horaFId: document.getElementById("horaF").value,
            categoriaId: document.getElementById("categoria").value,
            maxPartId: document.getElementById("maxPart").value,
            latId: document.getElementById("latitude").textContent,
            lonId: document.getElementById("longitude").textContent,
            moradaId: document.getElementById("morada").value,
            gesID : gesID 
        };
        try {
            let evento = await $.ajax({
                url: "/api/eventos/",
                method: 'post',
                dataType: 'json',
                data: JSON.stringify(obj),
                contentType: 'application/json'
            });
            

        console.log(evento);
        document.getElementById("Concluído").innerHTML =
            "Evento criado";
        alert("Evento criado")
    } catch (err) {
        console.log(err);
    }    
}