
// Variables
let startTime, elapsedTime = 0, timerInterval;

// Display time in HH:MM:SS format
function displayTime() {
    let hours = Math.floor(elapsedTime / 3600000);
    let minutes = Math.floor((elapsedTime % 3600000) / 60000);
    let seconds = Math.floor((elapsedTime % 60000) / 1000);

    hours = String(hours).padStart(2, '0');
    minutes = String(minutes).padStart(2, '0');
    seconds = String(seconds).padStart(2, '0');

    document.getElementById('time').textContent = `${hours}:${minutes}:${seconds}`;
}

// Start the stopwatch
function start() {
    if (!startTime) {
        startTime = Date.now() - elapsedTime;
        timerInterval = setInterval(function () {
            elapsedTime = Date.now() - startTime;
            displayTime();
        }, 10);
    }
}

// Stop the stopwatch
function stop() {
    clearInterval(timerInterval);
    startTime = null;
}

// Reset the stopwatch
function reset() {
    stop();
    elapsedTime = 0;
    displayTime();
}

// Event Listeners
document.getElementById('start').addEventListener('click', start);
document.getElementById('stop').addEventListener('click', stop);
document.getElementById('reset').addEventListener('click', reset);
