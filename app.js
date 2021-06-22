
var x;
var startstop = 0;

function startStop() {

    startstop = startstop + 1;

    if (startstop === 1) {
        start();
        document.getElementById("start").innerHTML = "Stop";

    } else if (startstop === 2) {

        document.getElementById("start").innerHTML = "Start";
        startstop = 0;
        stop();
    }

}




var milisec = 0
var sec = 0
var mint = 0



function start() {


    x = setInterval(function () {
        if (document.getElementById("milisec").innerHTML < 9) {

            document.getElementById("milisec").innerHTML = "0" + ++milisec;

        } else { document.getElementById("milisec").innerHTML = ++milisec }


        // document.getElementById("start").innerHTML = "Stop";

        if (milisec === 100) {

            milisec = 0;
            if (document.getElementById("sec").innerHTML < 9) {

                document.getElementById("sec").innerHTML = "0" + ++sec;
            } else { document.getElementById("sec").innerHTML = ++sec; }

            document.getElementById("milisec").innerHTML = "00";
        }

        if (sec == 60) {

            if (document.getElementById("mint").innerHTML < 9) {

                document.getElementById("mint").innerHTML = "0" + ++mint;
            } else { document.getElementById("mint").innerHTML = ++mint; }

            document.getElementById("sec").innerHTML = "00";

            sec = 0;
        }

    }, 10)
}

function stop() {
    clearInterval(x);
}





function reset() {

    startstop = 1
    startStop();
    clearInterval(x);


    document.getElementById("milisec").innerHTML = "00";
    document.getElementById("sec").innerHTML = "00";
    document.getElementById("mint").innerHTML = "00";

    milisec = 0
    sec = 0
    mint = 0

}


function save(){
    
    var ul = document.getElementById('timeList')
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(document.getElementById('display').innerText));
    ul.appendChild(li);
    
}