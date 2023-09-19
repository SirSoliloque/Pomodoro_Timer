let duree_travail = 1800;
let duree_pause = 1800;
try {
    const stockage = window.localStorage;

    if (stockage.getItem("duree_travail") !== null) {
        duree_travail = parseInt(stockage.getItem("duree_travail"));
    }

    if (stockage.getItem("duree_pause") !== null) {
        duree_pause = parseInt(stockage.getItem("duree_pause"));
    }
} catch (error) {
    console.log(error);
}




const horloge = document.getElementById("timer");
let work = true;
var r = document.querySelector(':root');

let timer = duree_travail;
let timerproperty ;
let playButton = document.getElementById("play");
let stopButton = document.getElementById("stop");
horloge.innerHTML = new Date(1000 * timer).toISOString().substring(11, 19);
playButton.addEventListener("click", function(){
    clearInterval(timerproperty);
    timerproperty=setInterval(passe_temps, 1000);
    playButton.style.setProperty("display","none");
    stopButton.style.setProperty("display","block");

});
stopButton.addEventListener("click", function(){
    clearInterval(timerproperty);
    if (work){
        timer = duree_travail;
    }else{
        work = true;
        timer = duree_travail;
    }
    horloge.innerHTML = new Date(1000 * timer).toISOString().substring(11, 19);
    stopButton.style.setProperty("display","none");
    playButton.style.setProperty("display","block");
});

function passe_temps(){
    timer--;
    if (timer<0){
        if (work){
            work = false;
            timer = duree_pause;
            change_color();
            
        }else{
            work = true;
            timer = duree_travail;
            change_color();
        }
    }
    horloge.innerHTML = new Date(1000 * timer).toISOString().substring(11, 19);

}

function change_color(){
    if (work){
        horloge.style.setProperty("color","red");
        document.body.style.setProperty('--main-bg-color','#e13d3d');
        document.body.style.setProperty('--affichage-bg-color','#aa0000');
        document.body.style.setProperty('--button-hover-color','#ff9999');
        document.body.style.setProperty('--button-color','#aa0000');
    }else{
        horloge.style.setProperty("color","seagreen");
        document.body.style.setProperty('--main-bg-color','#94c7a8');
        document.body.style.setProperty('--affichage-bg-color','#69967b');
        document.body.style.setProperty('--button-hover-color','#c0f0d3');
        document.body.style.setProperty('--button-color','#69967b');
    }
}
//boutons paramètres
let parametres = document.getElementById("parametres");
let parametres_button = document.getElementById("parametres_button");
parametres.style.display = "none";
parametres_button.addEventListener("click", function(){
    if (parametres.style.display == "none") {
        parametres.style.display = "block";
    } else {
        parametres.style.display = "none";
    }
});




// Slider paramètres

let slider_travail = document.getElementById("SliderTempsTravail");
let slider_pause = document.getElementById("SliderTempsPause");
let output_travail = document.getElementById("tempsTravail");
let output_pause = document.getElementById("tempsPause");
slider_travail.value = duree_travail/60;
slider_pause.value = duree_pause/60;
output_travail.innerHTML = slider_travail.value;
output_pause.innerHTML = slider_pause.value;
slider_travail.oninput = function() {
    work = true;
    output_travail.innerHTML = this.value;
    duree_travail = this.value*60;
    stockage.setItem("duree_travail", duree_travail);
    timer = duree_travail;
    horloge.innerHTML = new Date(1000 * timer).toISOString().substring(11, 19);
}
slider_pause.oninput = function() {
    output_pause.innerHTML = this.value;
    duree_pause = this.value;
    stockage.setItem("duree_pause", duree_pause);
}