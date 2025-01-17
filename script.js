let birthdayDate = new Date('2024-07-23T00:00:00').getTime();
let currentDate = new Date().getTime();
let timeLeft = birthdayDate - currentDate;

function updateCountdown() {
    const countdownElement = document.getElementById("countdown");
    const messageElement = document.getElementById("message");
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = days.toString().padStart(2, '0');
    document.getElementById("hours").textContent = hours.toString().padStart(2, '0');
    document.getElementById("minutes").textContent = minutes.toString().padStart(2, '0');
    document.getElementById("seconds").textContent = seconds.toString().padStart(2, '0');

    if (timeLeft <= 0) {
        // Birthday has passed
        countdownElement.innerHTML = "";
        messageElement.textContent = "Happy Birthday!";
        confettiEffect();
        return;
    }

    timeLeft -= 1000;
    setTimeout(updateCountdown, 1000);
}

function confettiEffect() {
    const confettiContainer = document.getElementById("confetti");
    for (let i = 0; i < 100; i++) {
        const confettiEl = document.createElement('div');
        confettiEl.className = 'confetti';
        confettiEl.style.top = `${Math.random() * 100}%`;
        confettiEl.style.left = `${Math.random() * 100}%`;
        confettiContainer.appendChild(confettiEl);
    }
}

updateCountdown();
