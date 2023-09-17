const horloge = document.getElementById("timer");
var state = "travail";
var r = document.querySelector(':root');
let duree_travail=5;
let duree_pause=5;
let timer = duree_travail;
let timerproperty ;
horloge.innerHTML = new Date(1000 * timer).toISOString().substring(14, 19);
document.getElementById("play").addEventListener("click", function(){
    clearInterval(timerproperty);
    timerproperty=setInterval(passe_temps, 1000);
});
document.getElementById("stop").addEventListener("click", function(){
    clearInterval(timerproperty);
    if (state="travail"){
        timer = duree_pause;
    }else{
        state="travail";
        timer = duree_travail;
    }
    horloge.innerHTML = new Date(1000 * timer).toISOString().substring(14, 19);
});

function passe_temps(){
    timer--;
    if (timer<=0){
        if (state="travail"){
            state="pause";
            timer = duree_pause;
            change_color();
        }else{
            state="travail";
            timer = duree_travail;
            change_color();
        }
    }
    horloge.innerHTML = new Date(1000 * timer).toISOString().substring(14, 19);

}

function change_color(){
    if (state="travail"){
        document.documentElement.style.setProperty('--main-bg-color','#e13d3d');
        document.documentElement.style.setProperty('--affichage-bg-color','#aa0000');
        document.documentElement.style.setProperty('--button-hover-color','#e13d3d');
        document.documentElement.style.setProperty('--button-color','#e13d3d');
    }else{
        document.documentElement.style.setProperty('--main-bg-color','#94c7a8');
        document.documentElement.style.setProperty('--affichage-bg-color','#69967b');
        document.documentElement.style.setProperty('--button-hover-color','#c0f0d3');
        document.documentElement.style.setProperty('--button-color','#e13d3d');
    }
}