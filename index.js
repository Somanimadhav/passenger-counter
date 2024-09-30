const noButton = document.getElementById('no');
const yesButton = document.getElementById('yes');
const message = document.getElementById('message');
const heartsContainer = document.getElementById('hearts');

// Function to randomly move the "No" button
function moveNoButton() {
    const randomX = Math.random() * 300 - 150;
    const randomY = Math.random() * 200 - 100;
    noButton.style.transform = `translate(${randomX}px, ${randomY}px)`;
}

// Event listener for hovering or clicking the "No" button
noButton.addEventListener('mouseover', moveNoButton);
noButton.addEventListener('click', moveNoButton);

// Event listener for the "Yes" button
yesButton.addEventListener('click', () => {
    message.textContent = "I knew you would say yes, meet me tomorrow at Bean There!";
    createHearts(); // Trigger heart emoji animation
});

// Function to create heart emoji elements all over the screen
function createHearts() {
    for (let i = 0; i < 50; i++) { // Increased to 50 for more hearts
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.textContent = "❤️"; // Heart emoji
        heartsContainer.appendChild(heart);

        // Randomize the position on the screen
        const randomX = Math.random() * window.innerWidth;
        const randomY = Math.random() * window.innerHeight;

        // Randomize the animation duration
        const randomDuration = Math.random() * 2 + 2; // Between 2s to 4s

        // Set the heart's position and animation duration
        heart.style.left = `${randomX}px`;
        heart.style.top = `${randomY}px`;
        heart.style.animationDuration = `${randomDuration}s`;

        // Remove the heart after the animation is done
        setTimeout(() => {
            heart.remove();
        }, randomDuration * 1000);
    }
}
