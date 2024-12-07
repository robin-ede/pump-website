document.addEventListener("DOMContentLoaded", function () {
    const snowContainer = document.querySelector('.snow-container');
    const timerElement = document.getElementById('countdown-timer');
    const mikeTysonImage = document.querySelector('.mike-tyson img');

    // Set target time in CST
    const targetTimeCST = new Date("December 14, 2024 17:00:00-06:00").getTime();

    function updateCountdown() {
        const nowUTC = new Date().getTime(); // Get current time in UTC
        const distance = targetTimeCST - nowUTC;

        if (distance <= 0) {
            timerElement.textContent = "Merry Christmas!";
            return;
        }

        // Calculate time components
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display countdown
        timerElement.innerHTML = `
            <p>Countdown to Launch:</p>
            <span>${String(days).padStart(2, '0')}D ${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}</span>
        `;
    }

    // Update countdown every second
    setInterval(updateCountdown, 1000);

    // Create a single snowflake
    function createSnowflake() {
        const snowflake = document.createElement("div");
        snowflake.classList.add("snowflake");
        snowflake.style.left = `${Math.random() * window.innerWidth}px`;
        snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`;
        snowflake.style.opacity = Math.random();
        snowflake.style.fontSize = `${Math.random() * 10 + 10}px`;
        snowflake.textContent = "❄";
        snowContainer.appendChild(snowflake);

        setTimeout(() => snowflake.remove(), 5000);
    }

    // Trigger snowfall when Mike Tyson's image is clicked
    mikeTysonImage.addEventListener("click", () => {
        const snowInterval = setInterval(createSnowflake, 100);
        setTimeout(() => clearInterval(snowInterval), 5000); // Stop snowfall after 5 seconds
    });
});
