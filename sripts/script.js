const horloge = document.getElementById("timer");
let work = true;
var r = document.querySelector(':root');
let duree_travail=5;
let duree_pause=5;
let timer = duree_travail;
let timerproperty ;
let playButton = document.getElementById("play");
let stopButton = document.getElementById("stop");
horloge.innerHTML = new Date(1000 * timer).toISOString().substring(14, 19);
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
        change_color();
    }
    horloge.innerHTML = new Date(1000 * timer).toISOString().substring(14, 19);
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
    horloge.innerHTML = new Date(1000 * timer).toISOString().substring(14, 19);

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