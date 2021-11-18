'use strict';
window.onload = function(){
    
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
    // function timeConvert(time){
    //     hour = Math.floor(time / 60 * 60 * 1000);
    //     min =  Math.floor(time / 60 * 1000) ;
    //     sec =  Math.floor(time / 1000) ;
    //     milisec = time.slice(-3);
    //     console.log(hour);
    //     console.log(min);
    //     console.log(sec);
    //     console.log(milisec);
    //     timer_face.textContent = hour + ":" + min + ":" + sec + ":" + milisec;
    // }

    function displayFunction(){
        console.log(timeNow); 
        timeDelta = Date.now();
        timer_face.textContent = timeDelta - timeNow + keepTime;
    }

    // start押されたとき
    start.onclick = function(){
        timeNow = Date.now();
        console.log(typeof(timeNow));
        console.log(timeNow);
        interval = setInterval(displayFunction, 1); 
    };

    // stop
    stop.onclick= function(){
        let timeStop = Date.now();
        console.log(timeStop);
        clearInterval(interval);
        keepTime = timeStop - timeNow;
        timer_face.textContent = keepTime;

    }

    // reset
    reset.onclick = function(){
        var timeDelta = 0;
        keepTime = 0;
        timer_face.textContent = keepTime;
    }
    console.log(timer_face);
    console.log(start);
    console.log(stop);
    console.log(reset);
} 


// setInterval(関数function, 一定時間の指定)
// Date.now =1000x 60 x 60 x

