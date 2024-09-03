const quotes = [
    {
        text: "The only limit to our realization of tomorrow is our doubts of today.",
        author: "Franklin D. Roosevelt"
    },
    {
        text: "In the end, we will remember not the words of our enemies, but the silence of our friends.",
        author: "Martin Luther King Jr."
    },
    {
        text: "Life is what happens when you're busy making other plans.",
        author: "John Lennon"
    }
];

const quoteElement = document.getElementById('quote');
const authorElement = document.getElementById('author');
const newQuoteBtn = document.getElementById('new-quote-btn');

function newQuote() {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteElement.style.opacity = 0;
    authorElement.style.opacity = 0;

    setTimeout(() => {
        quoteElement.textContent = `"${randomQuote.text}"`;
        authorElement.textContent = `- ${randomQuote.author}`;
        quoteElement.style.opacity = 1;
        authorElement.style.opacity = 1;
    }, 600);
}

newQuoteBtn.addEventListener('click', newQuote);

document.addEventListener('DOMContentLoaded', newQuote);
const portfolioBtn = document.getElementById('portfolio-btn');

portfolioBtn.addEventListener('click', () => {
    window.location.href = 'https://mayang669.github.io/profile'; // Replace with your actual portfolio URL
});
const profilePics = [
    'porto123.jpg',
    'p0rto13.jpg', // Replace with actual image paths
    'mine.jpg',
];

const profilePic = document.getElementById('profile-pic');
const profilePicContainer = document.querySelector('.profile-pic-container');
let currentPicIndex = 0;

function changeProfilePic() {
    // Apply fade-out effect
    profilePic.classList.add('fade-out');
    
    // Wait for the fade-out transition to complete before changing the image
    setTimeout(() => {
        currentPicIndex = (currentPicIndex + 1) % profilePics.length;
        profilePic.src = profilePics[currentPicIndex];

        // Remove fade-out class and apply fade-in effect
        profilePic.classList.remove('fade-out');
        profilePic.classList.add('fade-in');
    }, 500); // Match this time with the CSS opacity transition duration
}

// Automatically change profile picture every 5 seconds
setInterval(changeProfilePic, 5000);

// Initialize profile picture with fade-in effect
profilePic.classList.add('fade-in');