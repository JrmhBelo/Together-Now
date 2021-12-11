var mymap;
var Interiormarker = new Array();
var Exteriormarker = new Array();
var greenIcon;
var redIcon;
var latPosition;
var lonPosition;

window.onload = async function () {
    getEventos();
    getCurrentPosition();
    mymap = L.map('mapid').setView([38.707325418964764, -9.152454160542419], 11);

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoibWJ1Z2FsaG8iLCJhIjoiY2phOWdhbWR5MGprdDJ5cDgzenR5MXMxMCJ9.n38CZPOHiDjdbKXw2YuEmA'
    }).addTo(mymap);

    L.Control.geocoder().addTo(mymap);

    greenIcon = L.icon({
        iconUrl: '../images/placeholder.png',
        iconSize:     [50, 50],
        iconAnchor:   [25, 54], 
        popupAnchor:  [13, -50] 
    });

    redIcon = L.icon({
        iconUrl: '../images/location.png',
        iconSize:     [70, 70], 
        iconAnchor:   [30, 54], 
        popupAnchor:  [25, -30] 
    });

    eventos = await $.ajax({
        url:"/api/eventos",
        method: "get",
        dataType: "json"
    });

    for (let evento of eventos){
        if (evento.eve_lati && evento.eve_categ=='Interior') {
            var marker = L.marker([evento.eve_lati, evento.eve_lon],{icon: greenIcon}).addTo(mymap).bindPopup(`<h4 onclick='showEvento(${evento.eve_id})'><u>${evento.eve_nome}</u>
                                                                                                            <br>${evento.eve_descricao}<br> Data de Inicio: ${formatDate(evento.eve_datai)}
                                                                                                            <br> Data de Fim: ${formatDate(evento.eve_dataf)}<br> Categoria: ${evento.eve_categ}</h4>`);
            Interiormarker.push(marker);
            eventos.push({evento: evento, marker: marker});
        }else if(evento.eve_categ=='Exterior') {
            var mymarker = L.marker([evento.eve_lati, evento.eve_lon],{icon: redIcon}).addTo(mymap).bindPopup(`<h4 onclick='showEvento(${evento.eve_id})'><u>${evento.eve_nome}</u>
                                                                                                            <br>${evento.eve_descricao}<br> Data de Inicio: ${formatDate(evento.eve_datai)}
                                                                                                            <br> Data de Fim: ${formatDate(evento.eve_dataf)}<br> Categoria: ${evento.eve_categ}</h4>`);
            ~Exteriormarker.push(mymarker);
            eventos.push({evento: evento, marker: mymarker});
        }
    }
    };


async function getEventos(){
    let elem = document.getElementById("eventos");
    try {
        let eventos = await $.ajax({
        url: "/api/eventos",
        method: "get",
        dataType: "json"
        });
        let html ="";
        for(let evento of eventos)
            html += `<section onmouseover="getEvento(${evento.eve_id})" onclick="getRota(${evento.eve_id})"'>
            ${evento.eve_nome}</section>`
        elem.innerHTML = html;
    } catch(err) {
        console.log(err);
        elem.innerHTML = "<h1> Page not Available </h1>";
    }
}

async function getEvento(id){
    sessionStorage.setItem("eventoId",id);
    evento = await $.ajax({
        url:"/api/eventos/"+id,
        method: "get",
        dataType: "json"
    });
    lat = evento.eve_lati;
    lon = evento.eve_lon
    mymap.flyTo([lat, lon], 12)

}

async function getRota(id){
    sessionStorage.setItem("eventoId",id);
    evento = await $.ajax({
        url:"/api/eventos/"+id,
        method: "get",
        dataType: "json"
    });

    routeControl = L.Routing.control({
        waypoints: [
          L.latLng(latPosition, lonPosition),
          L.latLng(evento.eve_lati,evento.eve_lon)
        ],
        routeWhileDragging: true,
        geocoder: L.Control.Geocoder.nominatim(),
      }).addTo(mymap);

}

function createEventosHTML(eventos) {
    let html = "";
    for(let evento of eventos){
            html += `<section onmouseover="getEvento(${evento.eve_id})" onclick="getRota(${evento.eve_id})"'>
            ${evento.eve_nome}</section>`
    }
    document.getElementById("eventos").innerHTML = html;
}
    
async function filtrar() {
    try {
        let categoria= document.getElementById("categoria").value;   
        
        
        let eventos = await $.ajax({
            url: `/api/eventos/search/?categoria=${categoria}`,
            method: "get",
            dataType: "json"
        
        });
        createEventosHTML(eventos);
        filtrarMarkers(categoria);
    } catch(err) {
        
        console.log(err);
        }
}

async function filtrarMarkers(categoria) {
    if (categoria == 'Interior') {
        for(i = 0; i< Exteriormarker.length; i++){
            mymap.removeLayer(Exteriormarker[i]);
        }
        if (Interiormarker){     
            for(m = 0; m< Interiormarker.length; m++){
                Interiormarker[m].addTo(mymap)
            }
        }

    }else if(categoria == 'Exterior') {
        for(i = 0; i< Interiormarker.length; i++){
            mymap.removeLayer(Interiormarker[i]);
        }
        if (Exteriormarker){    
            for(m = 0; m< Exteriormarker.length; m++){
                Exteriormarker[m].addTo(mymap)
            }
        }
        }
    
}

async function getCurrentPosition() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition)
    }
}

function showPosition(position) {
    lonPosition = position.coords.longitude
    latPosition = position.coords.latitude
}

function showEvento(id) {
    sessionStorage.setItem("eventoId",id);
    window.location = "evento.html";
}

function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [day, month, year].join('-');
}
 