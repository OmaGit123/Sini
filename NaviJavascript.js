var latitude;
var longitude;

function Navis(){
    var nappula = document.createElement("button");
    nappula.innerHTML ="näytä sijainti";
    document.body.appendChild(nappula);
    nappula.addEventListener("click", naytasijainti);
  
    if(navigator.geolocation) {

        navigator.geolocation.getCurrentPosition(
            function(position) {
                latitude = position.coords.latitude;
                longitude = position.coords.longitude;
            })
        }
    

    else {
        alert("Geolokaatio ei tuettu");
    }
}


function naytasijainti(){

   var leveys = document.getElementById("leveys")
   var pituus =  document.getElementById("pituus")
   leveys.innerHTML = latitude;
   pituus.innerHTML = longitude;

  //  alert("Koordinaattisi ovat " + latitude + "leveysastetta ja"  + longitude + " pituusastetta");
  //  window.location.href = "https://maps.google.com/?q=" + latitude + "," + longitude;
}
window.addEventListener("load", Navis);
