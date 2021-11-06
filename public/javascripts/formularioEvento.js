var Default_Coords = [38.707325418964764, -9.152454160542419]
window.onload = async function () {

    mymap = L.map('mapid').setView(L.latlng(Default_Coords[0], Default_Coords[1], 12));

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoibWJ1Z2FsaG8iLCJhIjoiY2phOWdhbWR5MGprdDJ5cDgzenR5MXMxMCJ9.n38CZPOHiDjdbKXw2YuEmA'
    }).addTo(mymap)

    var myMarker= L.marker(Default_Coords.addTo(mymap))

    mymap.on("click", function(e){
        var {lat,lng} = e.latlng
        console.log(lat,lng)
        myMarker.setLatLng([lat, lng])
    }
    //document.getElementById('latitude').textContent = lat
    //document.getElementById('longitude').textContent = lon
    )}

async function criar() {
 
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
            //latId: document.getElementById("latitude").value, ###colocar no Evento Model quando estiver concluido
            //lonId: document.getElementById("longitude").value,
            //moradaId: document.getElementById("morada").value,
            //gesId = sessionStorage.getItem("gesId");
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
    } catch (err) {
        console.log(err);
    }    
}