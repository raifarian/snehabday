// script.js
document.getElementById('surpriseBtn').addEventListener('click', function() {
    const message = document.getElementById('message');
    message.classList.remove('hidden');
    this.style.display = 'none';

    // Launch a burst of celebration!
    for (let i = 0; i < 60; i++) {
        setTimeout(createConfetti, i * 50);
    }
});

function createConfetti() {
    const emojis = ['💖', '✨', '🌸', '🎂', '👑'];
    const confetti = document.createElement('div');
    
    confetti.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
    confetti.style.position = 'fixed';
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.top = '-5vh';
    confetti.style.fontSize = Math.random() * 25 + 15 + 'px';
    confetti.style.zIndex = '999';
    confetti.style.pointerEvents = 'none';
    
    document.body.appendChild(confetti);

    const duration = Math.random() * 3 + 3; // 3-6 seconds
    
    const animation = confetti.animate([
        { transform: `translateY(0) rotate(0deg)`, opacity: 1 },
        { transform: `translateY(105vh) rotate(${Math.random() * 360}deg)`, opacity: 0 }
    ], {
        duration: duration * 1000,
        easing: 'linear'
    });

    animation.onfinish = () => confetti.remove();
}