'use strict';
window.onload = function(){
    
    let milisec = 0;
    let sec = 0;
    let min = 0;
    let hour = 0;
    var timer_face = document.getElementById("timer_face");
    var start = document.getElementById("btn_start");
    var stop = document.getElementById("btn_stop");
    var reset = document.getElementById("btn_reset");
    function displayFunction(time){
        Number(time);
        console.log(typeof(time));
        var timeDelta = Date.now() - time;
        timer_face.textContent = timeDelta;
    }
    // start押されたとき
    start.onclick = function(){
        var timeNow = Date.now();
        console.log(typeof(timeNow));
        setInterval(function(){displayFunction(timeNow)}, 1000); 
    }
    // stop
    stop.onclick= function(){
        var timeStop = Date.now();
        console.log(timeStop);
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