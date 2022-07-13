
var hh = 0;
var mm = 0;
var ss = 0;

//quantos milesmo valem 1 segundo
var tem = 1000; 
var cron;

function start(){
    cron = setInterval(() => { timer(); }, tem);  
}

function pause(){
    clearInterval(cron);
} 

function stop(){
    clearInterval(cron);
    hh = 0;
    mm = 0;
    ss = 0;

    document.getElementById('conteudo').innerText = '00:00:00';
}

function timer(){
    ss++;

    if(ss == 60) {
        ss = 0;
        mm++;
    
        if(mm == 60){
            mm = 0;
            hh++;
        }
    }
        var format = (hh < 10 ? '0' + hh : hh) + ':' + (mm < 10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss);
        document.getElementById("conteudo").innerText = format;
}