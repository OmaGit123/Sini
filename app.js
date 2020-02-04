function Testi(){



var nappula = document.getElementById("Nappi")
nappula.onclick= function(){
    console.log("Painettu")
    document.getElementById("taulukko").hidden=true
}
}
Testi();