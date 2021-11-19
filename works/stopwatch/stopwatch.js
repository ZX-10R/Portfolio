'use strict';
window.onload = function(){
    let time =0;
    let milisec= 0;
    let sec = 0;
    let min = 0;
    let hour = 0;
    let interval;
    let timeDelta = 0;
    let timeNow = 0;
    let keepTime = 0;
    let timer_face = document.getElementById("timer_face");
    let start = document.getElementById("btn_start");
    let stop = document.getElementById("btn_stop");
    let reset = document.getElementById("btn_reset");
    reset.disabled = true;

    function timeConvert(time){
        hour = Math.floor(time / 3600000);
        min =  Math.floor(time / 60000);
        sec =  Math.floor(time % 60000 / 1000);
        milisec = Math.floor(time % 1000);
        
        hour = ("00" + hour).slice(-2);
        min = ("00" + min).slice(-2);
        sec = ("00" + sec).slice(-2);
        milisec = ("00" + milisec).slice(-3);

        return hour + ":" + min + ":" + sec + ":" + milisec;
    }

    function displayFunction(){
        timeDelta = Date.now();
        timer_face.textContent = timeConvert(timeDelta - timeNow + keepTime);
    }

    // start押されたとき
    start.onclick = function(){
        stop.disabled = false;
        timeNow = Date.now();
        interval = setInterval(displayFunction, 1);
        start.disabled = true;
    };

    // stop
    stop.onclick= function(){
        stop.disabled = true;
        let timeStop = Date.now();
        clearInterval(interval);
        keepTime = timeStop + keepTime - timeNow;
        timer_face.textContent = timeConvert(keepTime);
        start.disabled = false;
        reset.disabled = false;
    }

    // reset
    reset.onclick = function(){
        var timeDelta = 0;
        keepTime = 0;
        clearInterval(interval);
        timer_face.textContent = timeConvert(keepTime);
        reset.disabled = true;
        start.disabled = false;
        stop.disabled = true;
    }
} 


// setInterval(関数function, 一定時間の指定)
// Date.now =1000x 60 x 60 x

