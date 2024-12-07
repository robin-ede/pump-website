document.addEventListener("DOMContentLoaded", function() {
    const timerElement = document.getElementById('countdown-timer');
    const followButton = document.getElementById('follow-button');
    const body = document.body;

    // Countdown Timer Logic
    const christmasDate = new Date("December 25, 2024 00:00:00").getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = christmasDate - now;

        if (distance < 0) {
            timerElement.textContent = "Merry Christmas!";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Format numbers to always show two digits
        const formatNumber = (num) => String(num).padStart(2, '0');

        // Display the countdown in "Days HH:MM:SS" format
        timerElement.innerHTML = `
            <p>Countdown to Launch:</p>
            <span>${formatNumber(days)} days ${formatNumber(hours)}:${formatNumber(minutes)}:${formatNumber(seconds)}</span>
        `;
    }

    setInterval(updateCountdown, 1000);

    // Falling Snow Effect
    function createSnowflake() {
        const snowflake = document.createElement("div");
        snowflake.classList.add("snowflake");
        snowflake.style.left = Math.random() * window.innerWidth + "px";
        snowflake.style.animationDuration = Math.random() * 3 + 2 + "s";
        snowflake.style.opacity = Math.random();
        snowflake.style.fontSize = Math.random() * 10 + 10 + "px";
        snowflake.textContent = "❄";
        body.appendChild(snowflake);

        setTimeout(() => {
            snowflake.remove();
        }, 5000);
    }

    followButton.addEventListener("click", function() {
        const bellSound = new Audio('images/bell_sound.mp3');
        bellSound.play();
        alert("Thank you for following! Enjoy the snow!");
        
        // Start snowfall for a limited time
        const snowInterval = setInterval(createSnowflake, 100);
        setTimeout(() => clearInterval(snowInterval), 5000); // Snowfall lasts 5 seconds
    });
});
