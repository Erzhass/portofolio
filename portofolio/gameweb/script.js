// Fungsi untuk menampilkan bagian tertentu berdasarkan menu navigasi
function showSection(section) {
  document.getElementById("home").style.display =
    section === "home" ? "block" : "none";
  document.getElementById("about").style.display =
    section === "about" ? "block" : "none";
  document.getElementById("contact").style.display =
    section === "contact" ? "block" : "none";
  document.getElementById("login").style.display =
    section === "login" ? "block" : "none";
}

// Fungsi untuk memuat permainan berdasarkan pilihan pengguna
// Tambahkan fungsi toggleFullscreen di awal kode
function toggleFullscreen(element) {
  if (!document.fullscreenElement) {
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.webkitRequestFullscreen) {
      element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
      element.msRequestFullscreen();
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  }
}

// Modifikasi fungsi loadGame yang sudah ada
function loadGame(game) {
  const gameContainer = document.getElementById("game-container");
  gameContainer.innerHTML = "";

  // Tambahkan tombol fullscreen
  const fullscreenButton = document.createElement("button");
  fullscreenButton.className = "fullscreen-btn";
  fullscreenButton.innerHTML = '<i class="fas fa-expand"></i> Fullscreen';
  fullscreenButton.onclick = () => toggleFullscreen(gameContainer);
  document.body.appendChild(fullscreenButton); // Tambahkan ke body alih-alih game container

  // Load game yang dipilih
  switch (game) {
    case "colorMatch":
      startColorMatch(gameContainer);
      break;
    case "memoryCard":
      startMemoryCard(gameContainer);
      break;
    case "mathQuiz":
      startMathQuiz(gameContainer);
      break;
    case "wordScramble":
      startWordScramble(gameContainer);
      break;
    case "snakeGame":
      startSnakeGame(gameContainer);
      break;
    case "typingTest":
      startTypingTest(gameContainer);
      break;
    case "whackAMole":
      startWhackAMole(gameContainer);
      break;
    case "puzzleSlider":
      startPuzzleSlider(gameContainer);
      break;
    default:
      gameContainer.innerHTML = "<p>Game tidak ditemukan.</p>";
  }
}

// Fungsi toggleFullscreen (tidak berubah)
function toggleFullscreen(element) {
  if (!document.fullscreenElement) {
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) {
      element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
      element.msRequestFullscreen();
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  }
}

// Permainan 1: Tebak Angka
function startTebakAngka(container) {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  let attempts = 0;
  container.innerHTML = `
        <h2>Tebak Angka</h2>
        <p>Tebak angka antara 1 dan 100</p>
        <input type="number" id="tebakan" placeholder="Masukkan tebakan">
        <button onclick="checkTebakan(${randomNumber})">Tebak</button>
        <p id="feedback"></p>
    `;

  window.checkTebakan = function (guess) {
    const tebakan = document.getElementById("tebakan").value;
    attempts++;
    const feedback = document.getElementById("feedback");
    if (tebakan == guess) {
      feedback.innerText = `Benar! Kamu menebak dalam ${attempts} kali percobaan.`;
    } else if (tebakan < guess) {
      feedback.innerText = "Terlalu rendah!";
    } else {
      feedback.innerText = "Terlalu tinggi!";
    }
  };
}

// Permainan 2: Klik Cepat
function startKlikCepat(container) {
  container.innerHTML = `
        <h2>Game Klik Cepat</h2>
        <p>Klik tombol sebanyak mungkin dalam 5 detik!</p>
        <button id="klikBtn" onclick="incrementScore()">Klik Saya!</button>
        <p>Skor: <span id="score">0</span></p>
    `;
  let score = 0;
  const scoreDisplay = document.getElementById("score");

  window.incrementScore = function () {
    score++;
    scoreDisplay.innerText = score;
  };

  setTimeout(() => {
    document.getElementById("klikBtn").disabled = true;
    alert(`Waktu habis! Skor akhir kamu: ${score}`);
  }, 5000);
}

//tangkap kotak
// Tambahkan fungsi ini ke script.js yang sudah ada

function startTangkapKotak(container) {
  let score = 0;
  let timeLeft = 30;
  let gameInterval;

  container.innerHTML = `
      <h2>Tangkap Kotak</h2>
      <p>Klik kotak sebanyak mungkin dalam 30 detik!</p>
      <div id="game-area" style="width: 300px; height: 300px; position: relative; background-color: #f0f0f0;">
          <div id="target" style="width: 30px; height: 30px; background-color: red; position: absolute; cursor: pointer;"></div>
      </div>
      <p>Skor: <span id="score">0</span></p>
      <p>Waktu: <span id="time">30</span> detik</p>
  `;

  const target = document.getElementById("target");
  const scoreDisplay = document.getElementById("score");
  const timeDisplay = document.getElementById("time");
  const gameArea = document.getElementById("game-area");

  function positionTarget() {
    const maxX = gameArea.clientWidth - target.clientWidth;
    const maxY = gameArea.clientHeight - target.clientHeight;
    target.style.left = Math.floor(Math.random() * maxX) + "px";
    target.style.top = Math.floor(Math.random() * maxY) + "px";
  }

  target.addEventListener("click", () => {
    score++;
    scoreDisplay.textContent = score;
    positionTarget();
  });

  function updateTimer() {
    timeLeft--;
    timeDisplay.textContent = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(gameInterval);
      alert(`Permainan berakhir! Skor akhir Anda: ${score}`);
      target.style.display = "none";
    }
  }

  positionTarget();
  gameInterval = setInterval(updateTimer, 1000);
}

// Tambahkan opsi baru di fungsi loadGame
function loadGame(game) {
  const gameContainer = document.getElementById("game-container");
  gameContainer.innerHTML = ""; // Kosongkan kontainer setiap kali permainan dimuat

  if (game === "tebakAngka") {
    startTebakAngka(gameContainer);
  } else if (game === "klikCepat") {
    startKlikCepat(gameContainer);
  } else if (game === "tangkapKotak") {
    startTangkapKotak(gameContainer);
  }
  // ... (kode lainnya tetap sama)
}

//memory//
// Tambahkan fungsi ini ke script.js yang sudah ada

function startMemoryCard(container) {
  const cards = ["A", "A", "B", "B", "C", "C", "D", "D", "E", "E", "F", "F"];
  let flippedCards = [];
  let matchedPairs = 0;

  // Acak urutan kartu
  cards.sort(() => Math.random() - 0.5);

  container.innerHTML = `
      <h2>Memory Card</h2>
      <p>Temukan semua pasangan kartu!</p>
      <div id="card-container" style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px;"></div>
  `;

  const cardContainer = document.getElementById("card-container");

  cards.forEach((card, index) => {
    const cardElement = document.createElement("div");
    cardElement.classList.add("card");
    cardElement.dataset.cardValue = card;
    cardElement.innerHTML = "?";
    cardElement.style.width = "50px";
    cardElement.style.height = "70px";
    cardElement.style.backgroundColor = "#ddd";
    cardElement.style.display = "flex";
    cardElement.style.justifyContent = "center";
    cardElement.style.alignItems = "center";
    cardElement.style.fontSize = "24px";
    cardElement.style.cursor = "pointer";
    cardElement.onclick = () => flipCard(cardElement);
    cardContainer.appendChild(cardElement);
  });

  function flipCard(card) {
    if (
      flippedCards.length < 2 &&
      !flippedCards.includes(card) &&
      !card.classList.contains("matched")
    ) {
      card.innerHTML = card.dataset.cardValue;
      card.style.backgroundColor = "#fff";
      flippedCards.push(card);

      if (flippedCards.length === 2) {
        setTimeout(checkMatch, 500);
      }
    }
  }

  function checkMatch() {
    const [card1, card2] = flippedCards;
    if (card1.dataset.cardValue === card2.dataset.cardValue) {
      card1.classList.add("matched");
      card2.classList.add("matched");
      matchedPairs++;
      if (matchedPairs === cards.length / 2) {
        alert("Selamat! Anda telah menemukan semua pasangan!");
      }
    } else {
      card1.innerHTML = "?";
      card2.innerHTML = "?";
      card1.style.backgroundColor = "#ddd";
      card2.style.backgroundColor = "#ddd";
    }
    flippedCards = [];
  }
}

// Tambahkan opsi baru di fungsi loadGame
function loadGame(game) {
  const gameContainer = document.getElementById("game-container");
  gameContainer.innerHTML = ""; // Kosongkan kontainer setiap kali permainan dimuat

  if (game === "tebakAngka") {
    startTebakAngka(gameContainer);
  } else if (game === "klikCepat") {
    startKlikCepat(gameContainer);
  } else if (game === "tangkapKotak") {
    startTangkapKotak(gameContainer);
  } else if (game === "memoryCard") {
    startMemoryCard(gameContainer);
  }
  // ... (kode lainnya tetap sama)
}

//whole
function startWhackAMole(container) {
  container.innerHTML = `
      <h2>Whack-a-Mole Game</h2>
      <p>Score: <span id="score">0</span></p>
      <p>Time Left: <span id="time">30</span> seconds</p>
      <div id="board" style="width: 300px; margin: 0 auto;"></div>
      <button id="startButton" class="btn btn-primary mt-3">Start Game</button>
  `;

  const holes = [];
  let score = 0;
  let timeLeft = 30;
  let gameInterval;
  let countdownInterval;

  function createBoard() {
    const board = document.getElementById("board");
    for (let i = 0; i < 9; i++) {
      const hole = document.createElement("div");
      hole.classList.add("hole");
      hole.style.display = "inline-block";
      hole.style.width = "100px";
      hole.style.height = "100px";
      hole.style.margin = "5px";
      hole.style.borderRadius = "50%";
      hole.style.backgroundColor = "#8B4513";
      hole.style.position = "relative";
      hole.style.overflow = "hidden";

      const mole = document.createElement("div");
      mole.classList.add("mole");
      mole.style.width = "90px";
      mole.style.height = "90px";
      mole.style.backgroundImage =
        'url("https://www.pngitem.com/pimgs/m/5-59414_cartoon-mole-png-transparent-png.png")';
      mole.style.backgroundSize = "cover";
      mole.style.position = "absolute";
      mole.style.bottom = "-100px";
      mole.style.left = "5px";
      mole.style.transition = "bottom 0.1s";

      hole.appendChild(mole);
      hole.addEventListener("click", whack);
      board.appendChild(hole);
      holes.push(hole);
    }
  }

  function startGame() {
    score = 0;
    timeLeft = 30;
    document.getElementById("score").textContent = score;
    document.getElementById("time").textContent = timeLeft;
    document.getElementById("startButton").disabled = true;

    gameInterval = setInterval(showRandomMole, 1000);
    countdownInterval = setInterval(countdown, 1000);
  }

  function showRandomMole() {
    const randomHole = holes[Math.floor(Math.random() * holes.length)];
    const mole = randomHole.querySelector(".mole");
    mole.style.bottom = "0";
    setTimeout(() => {
      mole.style.bottom = "-100px";
      if (timeLeft <= 0) endGame();
    }, 800);
  }

  function whack(e) {
    if (!e.isTrusted) return; // Cheater!
    const mole = this.querySelector(".mole");
    if (mole.style.bottom === "0px") {
      score++;
      mole.style.bottom = "-100px";
      document.getElementById("score").textContent = score;
    }
  }

  function countdown() {
    timeLeft--;
    document.getElementById("time").textContent = timeLeft;
    if (timeLeft <= 0) endGame();
  }

  function endGame() {
    clearInterval(gameInterval);
    clearInterval(countdownInterval);
    alert(`Game Over! Your score is ${score}`);
    document.getElementById("startButton").disabled = false;
  }

  createBoard();
  document.getElementById("startButton").addEventListener("click", startGame);
}

// Tambahkan opsi baru di fungsi loadGame
function loadGame(game) {
  const gameContainer = document.getElementById("game-container");
  gameContainer.innerHTML = ""; // Kosongkan kontainer setiap kali permainan dimuat

  if (game === "tebakAngka") {
    startTebakAngka(gameContainer);
  } else if (game === "klikCepat") {
    startKlikCepat(gameContainer);
  } else if (game === "tangkapKotak") {
    startTangkapKotak(gameContainer);
  } else if (game === "memoryCard") {
    startMemoryCard(gameContainer);
  } else if (game === "whackAMole") {
    startWhackAMole(gameContainer);
  }
}

//buble
function startBubblePop(container) {
  container.innerHTML = `
      <div class="text-center">
          <h2>Bubble Pop</h2>
          <p>Score: <span id="bubbleScore">0</span></p>
          <p>Lives: <span id="lives">3</span></p>
          <canvas id="bubbleCanvas" width="400" height="500" style="border:2px solid #000; background-color: #f0f8ff;"></canvas>
          <br>
          <button id="startBubbleGame" class="btn btn-primary mt-2">Start Game</button>
      </div>
  `;

  const canvas = document.getElementById("bubbleCanvas");
  const ctx = canvas.getContext("2d");
  let score = 0;
  let lives = 3;
  let bubbles = [];
  let gameLoop;
  let isGameRunning = false;

  class Bubble {
    constructor() {
      this.radius = 20;
      this.x = Math.random() * (canvas.width - this.radius * 2) + this.radius;
      this.y = canvas.height + this.radius;
      this.speed = Math.random() * 2 + 1;
      this.color = `hsl(${Math.random() * 360}, 70%, 50%)`;
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.fill();
      ctx.strokeStyle = "#fff";
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.closePath();
    }

    update() {
      this.y -= this.speed;
      if (this.y < -this.radius) {
        lives--;
        document.getElementById("lives").textContent = lives;
        return false;
      }
      return true;
    }

    checkClick(clickX, clickY) {
      const distance = Math.sqrt(
        Math.pow(clickX - this.x, 2) + Math.pow(clickY - this.y, 2)
      );
      return distance <= this.radius;
    }
  }

  function updateGame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Add new bubbles randomly
    if (Math.random() < 0.03) {
      bubbles.push(new Bubble());
    }

    // Update and draw bubbles
    bubbles = bubbles.filter((bubble) => {
      bubble.draw();
      return bubble.update();
    });

    // Check game over
    if (lives <= 0) {
      endGame();
    }

    if (isGameRunning) {
      requestAnimationFrame(updateGame);
    }
  }

  function startGame() {
    score = 0;
    lives = 3;
    bubbles = [];
    isGameRunning = true;
    document.getElementById("bubbleScore").textContent = score;
    document.getElementById("lives").textContent = lives;
    document.getElementById("startBubbleGame").disabled = true;
    updateGame();
  }

  function endGame() {
    isGameRunning = false;
    alert(`Game Over! Final Score: ${score}`);
    document.getElementById("startBubbleGame").disabled = false;
  }

  canvas.addEventListener("click", (event) => {
    if (!isGameRunning) return;

    const rect = canvas.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const clickY = event.clientY - rect.top;

    bubbles = bubbles.filter((bubble) => {
      if (bubble.checkClick(clickX, clickY)) {
        score += 10;
        document.getElementById("bubbleScore").textContent = score;
        return false;
      }
      return true;
    });
  });

  document
    .getElementById("startBubbleGame")
    .addEventListener("click", startGame);
}

// Update fungsi loadGame
function loadGame(game) {
  const gameContainer = document.getElementById("game-container");
  gameContainer.innerHTML = "";

  if (game === "tebakAngka") {
    startTebakAngka(gameContainer);
  } else if (game === "klikCepat") {
    startKlikCepat(gameContainer);
  } else if (game === "tangkapKotak") {
    startTangkapKotak(gameContainer);
  } else if (game === "memoryCard") {
    startMemoryCard(gameContainer);
  } else if (game === "whackAMole") {
    startWhackAMole(gameContainer);
  } else if (game === "bubblePop") {
    startBubblePop(gameContainer);
  }
}

//snake
function startSnakeGame(container) {
  container.innerHTML = `
      <div class="text-center">
          <h2>Snake Game</h2>
          <p>Score: <span id="snakeScore">0</span></p>
          <canvas id="snakeCanvas" width="400" height="400" style="border:2px solid #000; background-color: #f0f0f0;"></canvas>
          <br>
          <button id="startSnakeGame" class="btn btn-primary mt-2">Start Game</button>
          <p class="mt-2">Use Arrow Keys to control the snake</p>
      </div>
  `;

  const canvas = document.getElementById("snakeCanvas");
  const ctx = canvas.getContext("2d");
  const gridSize = 20;
  const tileCount = canvas.width / gridSize;

  let snake = [{ x: 10, y: 10 }];
  let food = { x: 5, y: 5 };
  let dx = 0;
  let dy = 0;
  let score = 0;
  let gameLoop;
  let gameSpeed = 100;
  let isGameRunning = false;

  // Game colors
  const colors = {
    snake: "#4CAF50",
    snakeHead: "#2E7D32",
    food: "#FF4444",
    grid: "#E0E0E0",
  };

  function drawGrid() {
    ctx.strokeStyle = colors.grid;
    ctx.lineWidth = 0.5;

    for (let i = 0; i < tileCount; i++) {
      ctx.beginPath();
      ctx.moveTo(i * gridSize, 0);
      ctx.lineTo(i * gridSize, canvas.height);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(0, i * gridSize);
      ctx.lineTo(canvas.width, i * gridSize);
      ctx.stroke();
    }
  }

  function drawGame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawGrid();

    // Draw snake
    snake.forEach((part, index) => {
      ctx.fillStyle = index === 0 ? colors.snakeHead : colors.snake;
      ctx.fillRect(
        part.x * gridSize,
        part.y * gridSize,
        gridSize - 2,
        gridSize - 2
      );
    });

    // Draw food
    ctx.fillStyle = colors.food;
    ctx.beginPath();
    ctx.arc(
      food.x * gridSize + gridSize / 2,
      food.y * gridSize + gridSize / 2,
      gridSize / 2 - 2,
      0,
      Math.PI * 2
    );
    ctx.fill();
  }

  function moveSnake() {
    const head = { x: snake[0].x + dx, y: snake[0].y + dy };

    // Check wall collision
    if (
      head.x < 0 ||
      head.x >= tileCount ||
      head.y < 0 ||
      head.y >= tileCount
    ) {
      endGame();
      return;
    }

    // Check self collision
    if (snake.some((part) => part.x === head.x && part.y === head.y)) {
      endGame();
      return;
    }

    snake.unshift(head);

    // Check food collision
    if (head.x === food.x && head.y === food.y) {
      score += 10;
      document.getElementById("snakeScore").textContent = score;
      generateFood();
      increaseSpeed();
    } else {
      snake.pop();
    }
  }

  function generateFood() {
    let newFood;
    do {
      newFood = {
        x: Math.floor(Math.random() * tileCount),
        y: Math.floor(Math.random() * tileCount),
      };
    } while (
      snake.some((part) => part.x === newFood.x && part.y === newFood.y)
    );
    food = newFood;
  }

  function increaseSpeed() {
    if (gameSpeed > 50) {
      gameSpeed -= 2;
      clearInterval(gameLoop);
      gameLoop = setInterval(gameUpdate, gameSpeed);
    }
  }

  function gameUpdate() {
    moveSnake();
    drawGame();
  }

  function startGame() {
    if (isGameRunning) return;

    snake = [{ x: 10, y: 10 }];
    dx = 1;
    dy = 0;
    score = 0;
    gameSpeed = 100;
    document.getElementById("snakeScore").textContent = score;
    generateFood();
    isGameRunning = true;
    document.getElementById("startSnakeGame").disabled = true;
    gameLoop = setInterval(gameUpdate, gameSpeed);
  }

  function endGame() {
    clearInterval(gameLoop);
    isGameRunning = false;
    alert(`Game Over! Final Score: ${score}`);
    document.getElementById("startSnakeGame").disabled = false;
  }

  document.addEventListener("keydown", (event) => {
    if (!isGameRunning) return;

    switch (event.key) {
      case "ArrowUp":
        if (dy !== 1) {
          dx = 0;
          dy = -1;
        }
        break;
      case "ArrowDown":
        if (dy !== -1) {
          dx = 0;
          dy = 1;
        }
        break;
      case "ArrowLeft":
        if (dx !== 1) {
          dx = -1;
          dy = 0;
        }
        break;
      case "ArrowRight":
        if (dx !== -1) {
          dx = 1;
          dy = 0;
        }
        break;
    }
  });

  document
    .getElementById("startSnakeGame")
    .addEventListener("click", startGame);
}

// Update fungsi loadGame
function loadGame(game) {
  const gameContainer = document.getElementById("game-container");
  gameContainer.innerHTML = "";

  if (game === "tebakAngka") {
    startTebakAngka(gameContainer);
  } else if (game === "klikCepat") {
    startKlikCepat(gameContainer);
  } else if (game === "tangkapKotak") {
    startTangkapKotak(gameContainer);
  } else if (game === "memoryCard") {
    startMemoryCard(gameContainer);
  } else if (game === "whackAMole") {
    startWhackAMole(gameContainer);
  } else if (game === "bubblePop") {
    startBubblePop(gameContainer);
  } else if (game === "snake") {
    startSnakeGame(gameContainer);
  }
}

//puzzle slide
function startPuzzleSlide(container) {
  container.innerHTML = `
      <div class="text-center">
          <h2>Puzzle Slide</h2>
          <p>Moves: <span id="moves">0</span></p>
          <div id="puzzle-container" style="width: 300px; height: 300px; margin: 20px auto; display: grid; grid-template-columns: repeat(3, 1fr); gap: 2px;"></div>
          <button id="startPuzzle" class="btn btn-primary">New Game</button>
      </div>
  `;

  const puzzleContainer = document.getElementById("puzzle-container");
  let tiles = [];
  let moves = 0;
  const size = 3;
  let emptyTile = size * size - 1;

  function createTiles() {
    tiles = Array.from({ length: size * size - 1 }, (_, i) => i + 1);
    tiles.push(null); // Empty tile
    return shuffleTiles(tiles);
  }

  function shuffleTiles(array) {
    let currentIndex = array.length;
    while (currentIndex !== 0) {
      const randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    // Ensure puzzle is solvable
    if (!isSolvable(array)) {
      // Swap last two tiles if puzzle is not solvable
      [array[array.length - 2], array[array.length - 3]] = [
        array[array.length - 3],
        array[array.length - 2],
      ];
    }
    return array;
  }

  function isSolvable(puzzle) {
    let inversions = 0;
    const puzzleWithoutNull = puzzle.filter((num) => num !== null);

    for (let i = 0; i < puzzleWithoutNull.length - 1; i++) {
      for (let j = i + 1; j < puzzleWithoutNull.length; j++) {
        if (puzzleWithoutNull[i] > puzzleWithoutNull[j]) {
          inversions++;
        }
      }
    }

    return inversions % 2 === 0;
  }

  function createTile(number, index) {
    const tile = document.createElement("div");
    tile.style.width = "100px";
    tile.style.height = "100px";
    tile.style.border = "2px solid #333";
    tile.style.display = "flex";
    tile.style.justifyContent = "center";
    tile.style.alignItems = "center";
    tile.style.fontSize = "24px";
    tile.style.fontWeight = "bold";
    tile.style.cursor = "pointer";
    tile.style.backgroundColor = number ? "#4CAF50" : "#ddd";
    tile.style.color = "#fff";

    if (number) {
      tile.textContent = number;
      tile.addEventListener("click", () => moveTile(index));
    }

    return tile;
  }

  function moveTile(index) {
    const row = Math.floor(index / size);
    const col = index % size;
    const emptyRow = Math.floor(emptyTile / size);
    const emptyCol = emptyTile % size;

    if (
      (Math.abs(row - emptyRow) === 1 && col === emptyCol) ||
      (Math.abs(col - emptyCol) === 1 && row === emptyRow)
    ) {
      // Swap tiles
      [tiles[index], tiles[emptyTile]] = [tiles[emptyTile], tiles[index]];
      emptyTile = index;
      moves++;
      document.getElementById("moves").textContent = moves;
      renderPuzzle();
      checkWin();
    }
  }

  function checkWin() {
    const isWin = tiles.every(
      (tile, index) =>
        (index === tiles.length - 1 && tile === null) || tile === index + 1
    );

    if (isWin) {
      setTimeout(() => {
        alert(`Congratulations! You solved the puzzle in ${moves} moves!`);
        startNewGame();
      }, 300);
    }
  }

  function renderPuzzle() {
    puzzleContainer.innerHTML = "";
    tiles.forEach((number, index) => {
      puzzleContainer.appendChild(createTile(number, index));
    });
  }

  function startNewGame() {
    moves = 0;
    document.getElementById("moves").textContent = moves;
    tiles = createTiles();
    renderPuzzle();
  }

  document
    .getElementById("startPuzzle")
    .addEventListener("click", startNewGame);
  startNewGame();
}

// Update fungsi loadGame untuk menambahkan game baru
function loadGame(game) {
  const gameContainer = document.getElementById("game-container");
  gameContainer.innerHTML = "";

  // Tambahkan tombol fullscreen untuk semua game
  const fullscreenButton = document.createElement("button");
  fullscreenButton.className = "fullscreen-btn";
  fullscreenButton.innerHTML = '<i class="fas fa-expand"></i> Fullscreen';
  fullscreenButton.onclick = () => toggleFullscreen(gameContainer);
  gameContainer.appendChild(fullscreenButton);

  if (game === "tebakAngka") {
    startTebakAngka(gameContainer);
  } else if (game === "klikCepat") {
    startKlikCepat(gameContainer);
  } else if (game === "tangkapKotak") {
    startTangkapKotak(gameContainer);
  } else if (game === "memoryCard") {
    startMemoryCard(gameContainer);
  } else if (game === "whackAMole") {
    startWhackAMole(gameContainer);
  } else if (game === "bubblePop") {
    startBubblePop(gameContainer);
  } else if (game === "snake") {
    startSnakeGame(gameContainer);
  } else if (game === "puzzleSlide") {
    startPuzzleSlide(gameContainer);
  }
}

//pencocokan warna
const profilePic = document.getElementById("profile-pic");
const aboutSection = document.querySelector(".about-section");

// Menambahkan event listener untuk mouseenter dan mouseleave
profilePic.addEventListener("mouseenter", () => {
  aboutSection.classList.add("active"); // Menambahkan kelas aktif saat kursor mendekati foto
});

profilePic.addEventListener("mouseleave", () => {
  aboutSection.classList.remove("active"); // Menghapus kelas aktif saat kursor meninggalkan foto
});
