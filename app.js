
var time = 0; 
var timerElement = document.getElementById('timer')
var timerId; 
var resultLog = document.getElementById('result')
// var pausedTime = []; 
// var pausedNumbersContainer = document.getElementById("pausedNumbersContainer");

function start (){
    timerId = setInterval(function(){
        time+= 1; 
        timerElement.innerText = time;
    }, 75); 

    // setTimeout(() => {
    //     clearInterval(timerId); 
    //     timerElement.innerText = ('LOSER'); 
    // }, 9000); 

    return time = 0; 
}

function stop(){
    return new Promise(function(resolve, reject){
        clearInterval(timerId);
        resolve(time);
    })
    
}

// function displayPausedNumbers() {
//     pausedNumbers.forEach(function(number) {
//         var numberElement = document.createElement("p");
//         numberElement.textContent = "Paused at time: " + number;
//         pausedNumbersContainer.appendChild(numberElement);
//     });
// }
