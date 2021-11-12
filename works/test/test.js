'use strict';
window.onload = function(){

    let milisec = 0;
    let sec = 0;
    let min = 0;
    let hour = 0;
    var timeNow = Date.now();
    console.log(timeNow);
    var timer_face = document.getElementById("timer_face");
    var start = document.getElementsByName("btn_start");
    var stop = document.getElementsByName("btn_stop");
    var reset = document.getElementsByName("btn_reset");
    console.log(timer_face);
    console.log(start);
    console.log(stop);
    console.log(reset);

    // start押されたとき
    start.onclick = function(){
        alert("!!");
    };
    
    
    

};

// setInterval(関数function, 一定時間の指定)