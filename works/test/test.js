'use strict';
window.onload = function(){
    
    // let milisec = 0;
    // let sec = 0;
    // let min = 0;
    // let hour = 0;
    let timeDelta = 0;
    let timeNow = 0;
    let keepTime = 0;
    let timer_face = document.getElementById("timer_face");
    let start = document.getElementById("btn_start");
    let stop = document.getElementById("btn_stop");
    let reset = document.getElementById("btn_reset");
    let interval;
    function displayFunction(time){
        console.log(time);
        timeDelta = new Date();
        timer_face.textContent = timeDelta.getTime() - time;
    }
    // start押されたとき
    start.onclick = function(){
        timeNow = new Date();
        console.log(typeof(timeNow.getTime()));
        console.log(timeNow.getTime());
        interval = setInterval(function(){displayFunction(timeNow.getTime())}, 0.1); 
    }
    // stop
    stop.onclick= function(){
        let timeStop = new Date();
        console.log(timeStop.getTime());
        clearInterval(interval);
        keepTime = timeNow.getTime() - timeStop.getTime();
        timer_face.textContent = keepTime;
    }
    // reset
    reset.onclick = function(){
        var timeDelta = 0;
    }
    console.log(timer_face);
    console.log(start);
    console.log(stop);
    console.log(reset);
    setInterval(displayFunction);
} 


// setInterval(関数function, 一定時間の指定)
// Date.now =1000x 60 x 60 x