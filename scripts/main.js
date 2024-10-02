let currentProfile = 0;

function swipeLeft() {
    const profiles = document.querySelectorAll('.profile-card');
    if (currentProfile < profiles.length - 1) {
        profiles[currentProfile].classList.add('swipe-left');
        setTimeout(() => {
            profiles[currentProfile].style.display = 'none';
            currentProfile++;
            if (currentProfile < profiles.length - 1) {
                profiles[currentProfile].style.display = 'flex';
            } else {
                document.getElementById('final-card').style.display = 'block';
            }
        }, 600); // Delay to allow the swipe animation to finish
    }
}

function swipeRight() {
    const profiles = document.querySelectorAll('.profile-card');
    if (currentProfile < profiles.length - 1) {
        profiles[currentProfile].classList.add('swipe-right');
        setTimeout(() => {
            profiles[currentProfile].style.display = 'none';
            currentProfile++;
            if (currentProfile < profiles.length - 1) {
                profiles[currentProfile].style.display = 'flex';
            } else {
                document.getElementById('final-card').style.display = 'block';
            }
        }, 600); // Delay to allow the swipe animation to finish
    }
}

function triggerNotifications() {
    const notificationIcons = ['email_icon.svg', 'like_icon.svg', 'love_icon.svg', 'message_icon.svg'];
    const bubbleSound = document.getElementById('bubbleSound');
    
    // Play the bubble sound
    bubbleSound.play();

    // Generate 45 floating icons
    for (let i = 0; i < 45; i++) {
        const icon = document.createElement('img');
        icon.src = `img/${notificationIcons[Math.floor(Math.random() * notificationIcons.length)]}`;
        icon.classList.add('floating-icon');

        // Set random horizontal position for the icons
        icon.style.left = `${Math.random() * 100}vw`;
        icon.style.top = `${Math.random() * 80}vh`;

        document.body.appendChild(icon);

        // Remove icon after the animation finishes (4 seconds)
        setTimeout(() => {
            icon.remove();
        }, 4000);
    }
}

// Music player functionality
const songs = [
    'audio/miss_macross.mp3',
    'audio/hold.mp3',
    'audio/sleepwalking.mp3',
    'audio/look_at_the_sky.mp3',
    'audio/pursuit.mp3'
];
const songTitles = [
    'Miss Macross by MACROSS 82-99',
    'Hold by Home',
    'Sleepwalking by The Chain Gang of 1974',
    'Look at the Sky by Porter Robinson',
    'PURSUIT by Gesaffelstein'
];

let currentSong = 0;
const audioPlayer = document.getElementById('musicPlayer');
const nowPlayingText = document.getElementById('nowPlayingText');
const playPauseBtn = document.getElementById('playPause');
const prevSongBtn = document.getElementById('prevSong');
const nextSongBtn = document.getElementById('nextSong');

// Load the current song and display its title
function loadSong(songIndex) {
    audioPlayer.src = songs[songIndex];
    nowPlayingText.textContent = `Now Playing: ${songTitles[songIndex]}`;
}

// Play or Pause toggle
playPauseBtn.addEventListener('click', function () {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playPauseBtn.textContent = '⏸️'; // Change button to pause icon
    } else {
        audioPlayer.pause();
        playPauseBtn.textContent = '▶️'; // Change button to play icon
    }
});

// Next song
nextSongBtn.addEventListener('click', function () {
    currentSong = (currentSong + 1) % songs.length;
    loadSong(currentSong);
    audioPlayer.play();
    playPauseBtn.textContent = '⏸️'; // Reset to pause icon when switching songs
});

// Previous song
prevSongBtn.addEventListener('click', function () {
    currentSong = (currentSong - 1 + songs.length) % songs.length;
    loadSong(currentSong);
    audioPlayer.play();
    playPauseBtn.textContent = '⏸️'; // Reset to pause icon when switching songs
});

// Load the first song on page load but do not auto-play it
window.onload = () => loadSong(currentSong);

function triggerSpamPopups() {
    const spamMessages = [
        "🚀 'URGENT: Your intergalactic royalty inheritance is awaiting transfer!'",
        "🛸 'Upgrade your spaceship's extended warranty now!'",
        "👽 'Claim your free moon vacation! Limited offer!'",
        "🔊 'You’ve been pre-approved for space credits!'",
        "🌌 'Be a part of the first Galactic Lottery! 1 in a million chance to win!'",
        "📞 'Reminder: Your cosmic subscription is expiring soon. Renew now!'",
        "🚨 'Last chance to buy asteroid insurance!'",
        "💫 'Protect your planetary investments with our galactic trust fund!'",
        "💸 'Transfer 5,000 space credits to save your galaxy from invasion!'",
        "🧑‍🚀 'Alien dating app! Find love across the universe!'",
        "🪐 'Urgent: Solar system safety check!'",
        "🌠 'Buy now: Limited edition black hole souvenir!'",
        "🛸 'Your UFO's warranty has expired. Act fast!'",
        "🌍 'Earth-to-Mars shuttle service available now. Book your trip!'",
        "👾 'Winning notification: You've received 10,000 space coins!'"
    ];

    // Function to create and display popups
    for (let i = 0; i < 3; i++) {
        const randomMessage = spamMessages[Math.floor(Math.random() * spamMessages.length)];
        
        const popup = document.createElement('div');
        popup.classList.add('spam-popup');
        popup.textContent = randomMessage;

        // Create round close button
        const closeButton = document.createElement('button');
        closeButton.classList.add('close-btn');
        closeButton.textContent = 'X';
        closeButton.onclick = () => popup.remove();

        // Append close button to the pop-up
        popup.appendChild(closeButton);

        // Set random position for the pop-up
        popup.style.left = `${Math.random() * 80}vw`;
        popup.style.top = `${Math.random() * 60}vh`;

        document.body.appendChild(popup);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('beamMeUpBtn').addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Smooth scroll effect
        });
    });
});