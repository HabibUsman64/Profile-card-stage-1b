function updateTime() {
    const timeElement = document.querySelector('[data-testid="test-user-time"]');
    if (timeElement) {
        // Displays time in milliseconds (Epoch format)
        timeElement.textContent = Date.now().toString();
    }
}

updateTime();

setInterval(updateTime, 100);