var mymap;
var eventos = [];
var eventos;

window.onload = async function () {
    mymap = L.map('mapid').setView([38.707325418964764, -9.152454160542419], 10);

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoibWJ1Z2FsaG8iLCJhIjoiY2phOWdhbWR5MGprdDJ5cDgzenR5MXMxMCJ9.n38CZPOHiDjdbKXw2YuEmA'
    }).addTo(mymap);

    eventos = await $.ajax({
        url:"/api/eventos",
        method: "get",
        dataType: "json"
    });

    for (let evento of eventos)
        
        if (evento.eve_lati) {
            var marker = L.marker([evento.eve_lati, evento.eve_lon]).addTo(mymap);
            eventos.push({evento: evento, marker: marker});
            evento.marker = marker;   
        }
    }
    
/* 38.7077, -9.1364
//preciso de fazer um add das coordenadas aqui tipo Array [[10.5,-3.56]]
coords = []
//preciso fazer um add das datas de inicio 
dInicio = []
//preciso fazer um add das datas de fim
dFim = []
//preciso de fazer um add de imagens dos eventos
imagens= []
//preciso de fazer um add de todos os eventos ex: evento1, evento2
eventos =[]

let l = coords.length;

var event = document.querySelector('#evento');

for ( let i = 0; i < l; i++) {
      //popups
      var pop = L.popups({
        closeonClick: true
    }).setContent('<h4>Data de Inicio: ' + dInicio[i] + '<br> Data de Fim: ' + dFim[i] + '</h4><img src=' + imagens[i] + ' style="height: 100px;">');
    //markers
    var marker = L.marker(coords[i]).addTo(mymap).bindPopup(pop);
    //labels
    var toollip = L.tooltip({
        permanent:true
    }).setContent(dInicio[i])

    marker.bindTooltip(toollip);

    // zoom in /fly to
    eventos[i].addEventListener("mouseover", ()=> {
        mymap.flyto(coords[i], 16)
    })
}
*/
