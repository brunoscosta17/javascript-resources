function startTimer(duration, display) {

    var timer = duration, minutes, seconds;

    setInterval(function () {
        
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        
        display.textContent = minutes + ":" + seconds;
        
       

        if (--timer < 0) {
            timer = duration;
            timer = "";
        }

    }, 1000);
}

window.onload = function () {
    var duration = 60 * 0.5,
    display = document.querySelector('#timer');
    startTimer(duration, display);
}