// game.js

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

canvas.width = 800;
canvas.height = 600;

let player = {
    x: 50,
    y: canvas.height - 150,
    width: 50,
    height: 50,
    speed: 5,
    velY: 0,
    jumping: false
};

let keys = [];

// Główna pętla gry
function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Grawitacja
    player.velY += 1.5;
    player.y += player.velY;

    // Kolizja z podłożem
    if (player.y + player.height >= canvas.height) {
        player.y = canvas.height - player.height;
        player.jumping = false;
    }

    // Ruch w lewo i prawo
    if (keys['ArrowRight']) {
        player.x += player.speed;
    }
    if (keys['ArrowLeft']) {
        player.x -= player.speed;
    }

    // Skakanie
    if (keys['ArrowUp'] && !player.jumping) {
        player.jumping = true;
        player.velY = -20;
    }

    // Rysowanie gracza
    ctx.fillStyle = '#FF0000';
    ctx.fillRect(player.x, player.y, player.width, player.height);

    requestAnimationFrame(gameLoop);
}

// Obsługa klawiszy
window.addEventListener('keydown', function(e) {
    keys[e.key] = true;
});

window.addEventListener('keyup', function(e) {
    keys[e.key] = false;
});

// Start gry
gameLoop();
