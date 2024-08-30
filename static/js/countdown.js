document.addEventListener('DOMContentLoaded', function() {
    const countdownElement = document.getElementById('countdown');
    if (!countdownElement) {
        return;
    }
    
    const targetDateString = countdownElement.dataset.target;
    const targetDate = new Date(targetDateString).getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = targetDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        const countdownString = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        countdownElement.innerHTML = countdownString;

        if (distance < 0) {
            clearInterval(countdownInterval);
            countdownElement.innerHTML = "Event has passed";
        }
    }

    updateCountdown(); // Run once immediately
    const countdownInterval = setInterval(updateCountdown, 1000); // Then update every second

    // Watch for theme changes
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === "attributes" && mutation.attributeName === "data-theme") {
                // Theme has changed, update countdown styles if needed
                const countdownTimer = document.querySelector('.countdown-timer');
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