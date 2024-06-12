let countdown;
let selectedMinutes = 0;
let isTimerRunning = false;

document.getElementById('btn5').addEventListener('click', () => selectTime(5));
document.getElementById('btn10').addEventListener('click', () => selectTime(10));
document.getElementById('btn15').addEventListener('click', () => selectTime(15));
document.getElementById('btn20').addEventListener('click', () => selectTime(20));
document.getElementById('start').addEventListener('click', startTimer);

function selectTime(minutes) {
    selectedMinutes = minutes;
    displayTimeLeft(selectedMinutes * 60);
    clearInterval(countdown); // Clear any existing intervals
    isTimerRunning = false;
}

function startTimer() {
    if (selectedMinutes === 0 || isTimerRunning) return;
    isTimerRunning = true;
    const now = Date.now();
    const then = now + selectedMinutes * 60 * 1000;
    displayTimeLeft(selectedMinutes * 60);

    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        if (secondsLeft < 0) {
            clearInterval(countdown);
            isTimerRunning = false;
            selectedMinutes = 0; 
            displayTimeLeft(0);
            return;
        }
        displayTimeLeft(secondsLeft);
    }, 1000);
}

function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    document.getElementById('minutes').textContent = minutes < 10 ? '0' + minutes : minutes;
    document.getElementById('seconds').textContent = remainderSeconds < 10 ? '0' + remainderSeconds : remainderSeconds;
}
