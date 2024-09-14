document.addEventListener('DOMContentLoaded', function() {
    const countdownElement = document.getElementById('countdown');
    const countdownTimer = document.querySelector('.countdown-timer');
    if (!countdownElement || !countdownTimer) {
        return;
    }
    
    const targetDateString = countdownElement.dataset.target;
    const targetDate = new Date(targetDateString).getTime();
    const countdownTitle = countdownTimer.dataset.title;

    // Create and add the title
    const titleElement = document.createElement('h2');
    titleElement.textContent = countdownTitle;
    countdownTimer.insertBefore(titleElement, countdownElement);

    // Create and add the conference button
    const conferenceButton = document.createElement('a');
    conferenceButton.textContent = 'Register Now';
    conferenceButton.className = 'conference-button';
    conferenceButton.href = 'https://www.explarax.com/event/odishaaiconference2024/overview'; // Adjust this URL as needed
    countdownTimer.appendChild(conferenceButton);

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance < 0) {
            titleElement.style.display = 'none'; // Hide the title
            const countdownString = `Join the conference now!`;
            countdownElement.textContent = countdownString;
            conferenceButton.style.display = 'inline-block'; // Make button more prominent
        } else {
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            const countdownString = `${days}d ${hours}h ${minutes}m ${seconds}s`;
            countdownElement.textContent = countdownString;
        }
    }

    updateCountdown(); // Run once immediately
    const countdownInterval = setInterval(updateCountdown, 1000); // Then update every second

    // Watch for theme changes
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === "attributes" && mutation.attributeName === "data-theme") {
                // Theme has changed, update countdown styles if needed
                if (countdownTimer) {
                    countdownTimer.style.transition = 'background 0.3s ease';
                }
            }
        });
    });

    observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["data-theme"]
    });
});